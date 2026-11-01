/* Essential profile: render configured apps and HDMI before touching a Tizen API. */
(function () {
    'use strict';
    var cfg = window.LAUNCHER_LOCAL || {};
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem('arn0.prefs.v1')) || {}; } catch (e) {}
    var configured = cfg.apps || [];
    var apps = (saved.home && saved.home.length ? saved.home : configured).filter(function (item) {
        return configured.some(function (entry) { return entry.id === item.id; });
    });
    var inputs = (Array.isArray(saved.inputs) ? saved.inputs : cfg.inputs || []).filter(function (item) {
        return !item.hidden && [1, 2, 3].indexOf(item.hdmi) >= 0;
    });
    var rows = [[], []];
    var row = 0, col = 0, busy = false, tvMode = false;
    var status = document.getElementById('status');
    var home = document.getElementById('home');
    var colours = ['#1665a3', '#7a101b', '#16465b', '#702123', '#154875', '#213765', '#132654'];
    function focus() {
        rows.forEach(function (buttons) { buttons.forEach(function (button) { button.classList.remove('focus'); }); });
        var button = rows[row][col];
        if (button) button.classList.add('focus');
    }
    function open(item, kind) {
        if (busy) return;
        busy = true;
        status.textContent = 'Apro ' + (item.label || 'HDMI ' + item.hdmi) + '…';
        var operation;
        try { operation = kind === 'app' ? Apps.launch(item.id) : Inputs.open(item.hdmi, item.method || 'viewer'); }
        catch (e) { operation = Promise.reject(e); }
        Promise.resolve(operation).then(function (mode) {
            busy = false;
            status.textContent = '';
            if (mode === 'inapp') { tvMode = true; home.style.visibility = 'hidden'; }
        }, function (error) {
            busy = false;
            status.textContent = 'Impossibile aprire. Riprova.';
            console.error('Launch failed', error && error.name);
        });
    }
    function makeButton(item, kind, index) {
        var button = document.createElement('button');
        button.className = 'tile';
        button.style.backgroundColor = kind === 'app' ? colours[index % colours.length] : '#17202e';
        var mark = document.createElement('span');
        mark.className = 'mark';
        mark.textContent = kind === 'app' ? item.label.slice(0, 2).toUpperCase() : 'HDMI';
        button.appendChild(mark);
        var label = document.createElement('span');
        label.className = 'label';
        label.textContent = item.label || 'HDMI ' + item.hdmi;
        button.appendChild(label);
        button.addEventListener('click', function () {
            row = kind === 'app' ? 0 : 1; col = index; focus(); open(item, kind);
        });
        button._item = item;
        return button;
    }
    apps.forEach(function (item, index) {
        var button = makeButton(item, 'app', index);
        rows[0].push(button); document.getElementById('apps-row').appendChild(button);
    });
    inputs.forEach(function (item, index) {
        var button = makeButton(item, 'input', index);
        rows[1].push(button); document.getElementById('inputs-row').appendChild(button);
    });
    if (!rows[0].length) row = 1;
    focus();
    function clock() {
        if (document.hidden) return;
        var now = new Date();
        document.getElementById('clock').textContent = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
    }
    clock(); setInterval(clock, 10000);
    document.addEventListener('keydown', function (event) {
        var key = event.keyCode;
        if ([37, 38, 39, 40, 13, 10009, 27].indexOf(key) < 0) return;
        event.preventDefault();
        if (tvMode) {
            if (key === 10009 || key === 27) {
                Inputs.hide().then(function () { tvMode = false; home.style.visibility = ''; });
            }
            return;
        }
        if (key === 37) col = Math.max(0, col - 1);
        if (key === 39) col = Math.min(rows[row].length - 1, col + 1);
        if (key === 38 && rows[0].length) { row = 0; col = Math.min(col, rows[0].length - 1); }
        if (key === 40 && rows[1].length) { row = 1; col = Math.min(col, rows[1].length - 1); }
        if (key === 13 && rows[row][col]) open(rows[row][col]._item, row === 0 ? 'app' : 'input');
        focus();
    });
    document.addEventListener('visibilitychange', function () {
        if (!document.hidden) { busy = false; status.textContent = ''; clock(); }
    });
    // Optional marks load after the initial screen; they never gate navigation or launch.
    requestAnimationFrame(function () { requestAnimationFrame(function () {
        apps.forEach(function (item, index) {
            var entry = configured.find(function (candidate) { return candidate.id === item.id; });
            if (!entry || ['netflix', 'primevideo', 'youtube', 'disneyplus'].indexOf(entry.brand) < 0) return;
            var image = document.createElement('img');
            image.className = 'logo';
            image.src = 'img/tiles/' + entry.brand + '.svg';
            image.alt = '';
            image.onload = function () { rows[0][index].children[0].style.visibility = 'hidden'; };
            rows[0][index].appendChild(image);
        });
    }); });
    window.Home = {
        homeItems: function () { return apps.map(function (item) { return {id:item.id, label:item.label, kind:'app'}; }); },
        inputs: function () { return inputs; },
        hdmiStatus: function () { return {}; }
    };
    window.__ARN0_ESSENTIAL__ = true;
})();
