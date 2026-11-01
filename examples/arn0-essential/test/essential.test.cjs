const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const sourceFile=path.join(__dirname,'../src/js/essential.js');
const configured=[['com.samsung.tv.tvPlusDeeplinker','Samsung TV Plus'],['org.tizen.netflix-app','Netflix'],['org.tizen.primevideo','Prime Video'],['9Ur5IzDKqV.TizenYouTube','YouTube'],['5im3FztIhW.RaiTVtizen','RaiPlay'],['g3zzYA7yO8.InfinityNew','Mediaset Infinity'],['MCmYXNxgcu.DisneyPlus','Disney+']].map(([id,label])=>({id,label}));
function harness(options={}){
 assert.ok(fs.existsSync(sourceFile),'Essential profile not implemented');
 const byId={},events={},calls=[],writes=[];let failures=options.failAppOnce?1:0;
 function element(tag='div'){
  const classes=new Set();return {tag,children:[],style:{},textContent:'',className:'',classList:{add:c=>classes.add(c),remove:c=>classes.delete(c),contains:c=>classes.has(c)},appendChild(el){this.children.push(el);return el},setAttribute(k,v){this[k]=v},focus(){},addEventListener(k,fn){this['on'+k]=fn}};
 }
 for(const id of ['apps-row','inputs-row','clock','status','home'])byId[id]=element();
 const document={hidden:false,getElementById:id=>byId[id]||(byId[id]=element()),createElement:element,addEventListener:(name,fn)=>events[name]=fn};
 const localStorage={getItem:()=>options.saved?JSON.stringify(options.saved):null,setItem:(...args)=>writes.push(args)};
 const window={LAUNCHER_LOCAL:{apps:options.apps||configured,inputs:[{hdmi:1,label:'HDMI 1'},{hdmi:2,label:'HDMI 2'},{hdmi:3,label:'HDMI 3'}]}};
 const context={window,document,localStorage,Apps:{launch:id=>{calls.push(['app',id]);return failures-- > 0 ? Promise.reject(new Error('Unavailable')) : Promise.resolve()}},Inputs:{open:(id,method)=>{calls.push(['hdmi',id,method]);return Promise.resolve(options.inputMode||'external')},hide:()=>{calls.push(['hideHDMI']);return Promise.resolve()}},console:{error(){},log(){}},Date,setInterval:()=>0,setTimeout:()=>0,requestAnimationFrame:()=>0};
 vm.runInNewContext(fs.readFileSync(sourceFile,'utf8'),context,{filename:'essential.js'});
 const key=keyCode=>{assert.equal(typeof events.keydown,'function');events.keydown({keyCode,preventDefault(){}})};
 return {byId,events,calls,writes,key,window};
}
test('First screen contains seven apps and three HDMI buttons before any native API work',()=>{
 const h=harness();assert.equal(h.byId['apps-row'].children.length,7);assert.equal(h.byId['inputs-row'].children.length,3);assert.deepEqual(h.calls,[]);assert.deepEqual(h.writes,[]);
});
test('Enter immediately opens the selected app without enumerating installed apps',async()=>{
 const h=harness();h.key(13);await Promise.resolve();assert.deepEqual(h.calls,[['app','com.samsung.tv.tvPlusDeeplinker']]);
});
test('Remote navigation reaches Disney+ and keeps the selection at the row edge',async()=>{
 const h=harness();for(let i=0;i<10;i++)h.key(39);h.key(13);await Promise.resolve();assert.deepEqual(h.calls,[['app','MCmYXNxgcu.DisneyPlus']]);
});
test('Remote navigation selects the third HDMI input with the viewer method',async()=>{
 const h=harness();h.key(40);h.key(39);h.key(39);h.key(13);await Promise.resolve();assert.deepEqual(h.calls,[['hdmi',3,'viewer']]);
});
test('Arrow movement on HDMI returns to apps without a native call',()=>{
 const h=harness();h.key(40);h.key(38);assert.deepEqual(h.calls,[]);
});
test('Saved app order and input labels survive without rewriting preferences',()=>{
 const saved={home:[configured[6],...configured.slice(0,6)],inputs:[{hdmi:2,label:'Console'}]};
 const h=harness({saved});
 assert.equal(h.byId['apps-row'].children[0].children[1].textContent,'Disney+');
 assert.equal(h.byId['inputs-row'].children.length,1);
 assert.equal(h.byId['inputs-row'].children[0].children[1].textContent,'Console');
 assert.deepEqual(h.writes,[]);
});
test('An unavailable app shows an error and allows another attempt',async()=>{
 const h=harness({failAppOnce:true});h.key(13);await new Promise(resolve=>setImmediate(resolve));
 assert.match(h.byId.status.textContent,/Impossibile aprire/);
 h.key(39);h.key(13);await Promise.resolve();assert.equal(h.calls.length,2);
});
test('Back returns from an HDMI displayed inside the launcher',async()=>{
 const h=harness({inputMode:'inapp'});h.key(40);h.key(13);await new Promise(resolve=>setImmediate(resolve));
 assert.equal(h.byId.home.style.visibility,'hidden');
 h.key(10009);await new Promise(resolve=>setImmediate(resolve));
 assert.equal(h.byId.home.style.visibility,'');assert.deepEqual(h.calls[1],['hideHDMI']);
});
test('Eight configured apps retain original YouTube beside OmegaTube',()=>{
 const apps=[...configured.slice(0,4),{id:'org.omegatube.app',label:'OmegaTube'},...configured.slice(4)];
 const h=harness({apps});
 assert.equal(h.byId['apps-row'].children.length,8);
 const ids=Array.from(h.window.Home.homeItems(),item=>item.id);
 assert.equal(ids[3],'9Ur5IzDKqV.TizenYouTube');assert.equal(ids[4],'org.omegatube.app');
 assert.equal(h.byId['inputs-row'].children.length,3);assert.deepEqual(h.calls,[]);
});
test('Remote activation reaches the added OmegaTube tile',async()=>{
 const apps=[...configured.slice(0,4),{id:'org.omegatube.app',label:'OmegaTube'},...configured.slice(4)];
 const h=harness({apps});for(let i=0;i<4;i++)h.key(39);h.key(13);await Promise.resolve();
 assert.deepEqual(h.calls,[['app','org.omegatube.app']]);
});
