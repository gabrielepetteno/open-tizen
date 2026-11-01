const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '../src/js/apps.js'), 'utf8');
function runtime(failure) {
  const calls = [];
  const tizen = {
    ApplicationControl: function(operation, uri, mime, category, data) { Object.assign(this, {operation, uri, mime, category, data}); },
    ApplicationControlData: function(key, value) { Object.assign(this, {key, value}); },
    application: {
      getCurrentApplication: () => ({appInfo: {id: 'Arn0Lnchr0.Launcher'}}),
      launch(id, success) {calls.push({method: 'launch', id}); success();},
      launchAppControl(control, id, success, error) {calls.push({method: 'launchAppControl', id, control}); failure ? error(failure) : success();}
    }
  };
  const context = {window: {}, tizen, setTimeout, clearTimeout};
  vm.runInNewContext(source, context, {filename: 'apps.js'});
  return {apps: context.window.Apps, calls};
}
test('TV Plus asks its hidden deeplinker to open the channel viewer', async () => {
  const {apps, calls} = runtime();
  await apps.launch('com.samsung.tv.tvPlusDeeplinker');
  assert.equal(calls.length, 1);
  assert.equal(calls[0].method, 'launchAppControl', 'plain launch silently exits without opening channels');
  assert.equal(calls[0].id, 'com.samsung.tv.tvPlusDeeplinker');
  assert.equal(calls[0].control.operation, 'http://tizen.org/appcontrol/operation/default');
  const data = Object.fromEntries(calls[0].control.data.map(item => [item.key, Array.from(item.value)]));
  assert.deepEqual(JSON.parse(data.PAYLOAD[0]), {values: {}});
  assert.deepEqual(data.type, ['CH']);
});
for (const id of ['org.tizen.netflix-app', 'org.tizen.primevideo', '9Ur5IzDKqV.TizenYouTube', '5im3FztIhW.RaiTVtizen', 'g3zzYA7yO8.InfinityNew', 'MCmYXNxgcu.DisneyPlus', 'org.tizen.tv-viewer']) {
  test(id + ' keeps its normal launch method', async () => {
    const {apps, calls} = runtime();
    await apps.launch(id);
    assert.deepEqual(calls, [{method: 'launch', id}]);
  });
}
test('TV Plus launch errors remain visible instead of falling back to the known no-op', async () => {
  const failure = new Error('TV Plus access denied');
  const {apps, calls} = runtime(failure);
  await assert.rejects(apps.launch('com.samsung.tv.tvPlusDeeplinker'), /TV Plus access denied/);
  assert.equal(calls.length, 1);
});
