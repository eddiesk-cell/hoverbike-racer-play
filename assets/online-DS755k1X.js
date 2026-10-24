const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./client-wxjKsTZn.js","./client-D9GYDIae.js"])))=>i.map(i=>d[i]);
import{i as e}from"./bikes-D7qsm9n8.js";import{t}from"./preload-helper-CRzLMJPS.js";var n=`hbr.name`,r=[1,3,5],i=8,a=`Can’t reach the race server. Start it with  npm run online`,o=`
.ho{position:absolute;inset:0;display:flex;flex-direction:column;padding:3.2vh 4vw 3vh;box-sizing:border-box;animation:hmIn .45s ease-out both}
.ho .top{display:flex;justify-content:space-between;align-items:flex-start}
.ho .brand{font-style:italic;font-weight:900;transform:skewX(-8deg);transform-origin:left bottom;line-height:.9}
.ho .brand b{display:block;font-size:clamp(26px,3.4vw,46px);color:#fff;text-shadow:0 0 18px var(--a)}
.ho .brand span{font-size:clamp(13px,1.3vw,18px);letter-spacing:.5em;background:linear-gradient(90deg,var(--a),var(--b));-webkit-background-clip:text;background-clip:text;color:transparent}
.ho .lan{max-width:46%;text-align:right;font-size:12px;letter-spacing:.08em;color:rgba(210,240,255,.78);line-height:1.6}
.ho .lan b{color:#fff;font-family:ui-monospace,Menlo,monospace;letter-spacing:0;font-size:18px;text-shadow:0 0 10px var(--a)}
.ho .lan .lanrow{display:inline-flex;align-items:center;gap:12px;margin-top:4px}
.ho .lan small{font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0;color:rgba(210,240,255,.6)}
.ho .btn.mini{padding:5px 10px;font-size:11px}
.ho .wait{padding:10px 14px;border:1px solid rgba(255,178,62,.6);background:rgba(255,178,62,.1);color:#ffd28a;font-size:13px;font-weight:800;letter-spacing:.16em;
  animation:hoBlink 1.2s ease-in-out infinite alternate}
@keyframes hoBlink{from{opacity:1}to{opacity:.55}}
.ho .pnl{background:linear-gradient(135deg,rgba(6,16,28,.93),rgba(5,10,22,.86));border:1px solid rgba(62,240,255,.28);
  box-shadow:0 0 24px rgba(62,240,255,.08);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
  clip-path:polygon(16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%,0 16px)}
.ho .lbl{font-size:11px;letter-spacing:.36em;font-weight:800;color:rgba(200,240,255,.72)}
.ho .err{min-height:22px;font-size:14px;font-weight:700;color:#ff6b86;text-shadow:0 0 10px rgba(255,40,80,.5);letter-spacing:.04em;white-space:pre-wrap}
.ho .err code{font:700 13px ui-monospace,Menlo,monospace;background:rgba(255,255,255,.1);padding:2px 7px;border-radius:3px;color:#fff}
.ho .btn{font:800 15px "SF Pro Display",system-ui,sans-serif;letter-spacing:.16em;color:#dff8ff;cursor:pointer;padding:12px 22px;
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.22);transform:skewX(-12deg);transition:all .15s;white-space:nowrap}
.ho .btn>span{display:inline-block;transform:skewX(12deg)}
.ho .btn:hover{border-color:var(--a)}
.ho .btn.pri{background:linear-gradient(90deg,var(--a),var(--b));color:#041018;border-color:transparent;box-shadow:0 0 18px color-mix(in srgb,var(--a) 55%,transparent)}
.ho .btn.on{background:#2bdc8a;color:#04140c;border-color:transparent;box-shadow:0 0 18px rgba(43,220,138,.6)}
.ho .btn.warn{background:linear-gradient(90deg,#ffb23e,#ff5a6a);color:#1a0604;border-color:transparent}
.ho .btn:disabled{opacity:.35;cursor:not-allowed;box-shadow:none}
.ho .focus{outline:2px solid #fff;outline-offset:4px}
.ho input{font:800 20px "SF Pro Display",system-ui,sans-serif;color:#fff;background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.25);
  padding:10px 14px;outline:none;letter-spacing:.06em;width:100%;box-sizing:border-box}
.ho input:focus{border-color:var(--a);box-shadow:0 0 0 2px color-mix(in srgb,var(--a) 45%,transparent)}
/* entry */
.ho .entry{margin:auto;width:min(860px,92vw);padding:28px 34px 22px;display:flex;flex-direction:column;gap:16px}
.ho .entry h2{margin:0;font:900 italic 34px "SF Pro Display",system-ui,sans-serif;letter-spacing:.14em;color:#fff;text-shadow:0 0 18px var(--a)}
.ho .two{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.ho .opt2{padding:18px 20px;border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.25);display:flex;flex-direction:column;gap:12px}
.ho .opt2 h3{margin:0;font-size:17px;letter-spacing:.2em;font-weight:900;color:#fff}
.ho .opt2 p{margin:0;font-size:13px;color:rgba(210,240,255,.75);line-height:1.45}
.ho input.code{font:900 40px ui-monospace,Menlo,monospace;letter-spacing:.5em;text-align:center;text-transform:uppercase;padding:8px 0 8px .5em}
.ho .row{display:flex;gap:12px;align-items:center}
/* lobby */
.ho .lob{flex:1;display:grid;grid-template-columns:minmax(300px,36%) 1fr;gap:2vw;margin-top:2.2vh;min-height:0}
.ho .left{display:flex;flex-direction:column;gap:1.6vh;min-height:0}
.ho .codebox{padding:14px 18px 16px}
.ho .codes{display:flex;gap:10px;margin-top:10px;align-items:center}
.ho .codes i{font:900 normal clamp(38px,4.4vw,62px) ui-monospace,Menlo,monospace;width:1.05em;text-align:center;color:#fff;
  background:rgba(0,0,0,.38);border:1px solid color-mix(in srgb,var(--a) 60%,transparent);text-shadow:0 0 18px var(--a);padding:4px 0}
.ho .codes .btn{margin-left:auto;padding:10px 14px;font-size:13px}
.ho .plist{padding:12px 14px;flex:1;display:flex;flex-direction:column;gap:5px;min-height:0;overflow:hidden}
.ho .pl{display:flex;align-items:center;gap:10px;padding:6px 10px;background:rgba(255,255,255,.04);border-left:4px solid var(--pc,#555);font-size:16px;min-height:26px}
.ho .pl.me{background:rgba(62,240,255,.1)}
.ho .pl .nm{font-weight:800;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ho .pl .bk{font-size:11px;letter-spacing:.18em;font-weight:800;color:rgba(210,240,255,.65);margin-left:10px;text-transform:uppercase}
.ho .pl .tag{font-size:10px;letter-spacing:.2em;font-weight:900;padding:2px 6px;border:1px solid rgba(255,255,255,.35)}
.ho .pl .st{font-size:11px;letter-spacing:.2em;font-weight:900;color:rgba(210,240,255,.55);min-width:96px;text-align:right}
.ho .pl .st.ok{color:#2bdc8a;text-shadow:0 0 8px rgba(43,220,138,.6)}
.ho .pl .st.off{color:#ffb23e}
.ho .pl.off .nm{opacity:.5}
.ho .pl.empty{border-left-style:dashed;color:rgba(210,240,255,.4);font-size:13px;letter-spacing:.2em;font-weight:700;background:none;border:1px dashed rgba(255,255,255,.12);border-left:4px dashed rgba(255,255,255,.18)}
.ho .pl.ai{color:rgba(210,240,255,.7)}
.ho .crown{width:18px;height:14px;color:#ffd23e;filter:drop-shadow(0 0 4px #ffb23e)}
.ho .right{display:flex;flex-direction:column;gap:1.6vh;min-height:0;padding:16px 20px 18px}
.ho .sec{display:flex;align-items:center;gap:12px}
.ho .sec::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,rgba(62,240,255,.35),transparent)}
.ho .grp.focus{outline:none}.ho .grp.focus>.sec .lbl,.ho .grp.focus .ol{color:#fff;text-shadow:0 0 10px var(--a)}
.ho .tcards{display:grid;grid-template-columns:repeat(5,1fr);gap:.9vw;margin-top:1vh}
.ho .tc{position:relative;cursor:pointer;border:1px solid rgba(255,255,255,.14);filter:saturate(.5) brightness(.6);transition:all .2s;
  clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);background:#05080f}
.ho .tc canvas{display:block;width:100%;aspect-ratio:7/5}
.ho .tc .nm{font-size:12px;font-weight:900;letter-spacing:.06em;padding:6px 8px 7px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fff}
.ho .tc.sel{filter:none;border-color:var(--ca);transform:translateY(-3px);box-shadow:inset 0 0 0 2px var(--ca)}
.ho .ro .tc{cursor:default}
.ho .opts{display:flex;gap:3vw;flex-wrap:wrap}
.ho .o{display:flex;align-items:center;gap:12px;padding:6px 10px;border:1px solid transparent}
.ho .o.focus{outline:none;border-color:color-mix(in srgb,var(--a) 70%,transparent);background:color-mix(in srgb,var(--a) 12%,transparent)}
.ho .ol{font-size:12px;letter-spacing:.3em;font-weight:800;color:rgba(200,240,255,.75)}
.ho .seg{display:flex;gap:6px}
.ho .seg button,.ho .step button{font:800 14px "SF Pro Display",system-ui,sans-serif;color:#dff8ff;cursor:pointer;background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.2);padding:6px 14px;min-width:46px;transform:skewX(-12deg)}
.ho .seg button.on{background:linear-gradient(90deg,var(--a),var(--b));color:#041018;border-color:transparent}
.ho .step{display:flex;align-items:center;gap:8px}.ho .step .v{font:800 22px ui-monospace,Menlo,monospace;width:28px;text-align:center;color:#fff}
.ho .ro .seg button,.ho .ro .step button{cursor:default}
.ho .ro .step button{visibility:hidden}
.ho .note{font-size:12px;letter-spacing:.18em;color:rgba(210,240,255,.65);font-weight:700}
.ho .acts{display:flex;gap:14px;margin-top:auto;align-items:center;justify-content:flex-end;flex-wrap:wrap}
.ho .acts .btn{font-size:18px;padding:16px 26px}
.ho .acts .start{font-size:22px;padding:18px 34px}
`,s=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),c=e=>typeof e==`number`?`#`+(e>>>0).toString(16).padStart(6,`0`).slice(-6):e||`#3ef0ff`,ee=t=>t.bike?`<span class="bk">${s(e(t.bike).name)}</span>`:``,te=`<svg class="crown" viewBox="0 0 18 14"><path d="M1 13h16L15.5 4l-4 4L9 1 6.5 8l-4-4z" fill="currentColor"/></svg>`,l=()=>/^(localhost|127\.|\[?::1\]?$)/.test(location.hostname);function u(e){let t=location.port?`:`+location.port:``;if(!l())return[`${location.protocol}//${location.host}`];let n=e=>/^192\.168\./.test(e)?0:/^10\./.test(e)?1:/^172\.(1[6-9]|2\d|3[01])\./.test(e)?2:3;return(e||[]).filter(e=>/^[\d.]+$/.test(e)).sort((e,t)=>n(e)-n(t)).map(e=>`http://${e}${t}`)}function ne(e){let t=u(e);return t.length?`Friends on the same Wi-Fi open<br><span class="lanrow"><b data-k="lanurl">${s(t[0])}</b><button class="btn mini" data-act="copylan"><span>COPY</span></button></span>`+(t.length>1?`<br><small>also ${t.slice(1).map(s).join(` · `)}</small>`:``):l()?`Create or join a room to see the address<br>friends on the same Wi-Fi open`:``}function d(e,l={}){let{root:d,levels:f}=e;if(!document.getElementById(`ho-style`)){let e=document.createElement(`style`);e.id=`ho-style`,e.textContent=o,document.head.appendChild(e)}let p=document.createElement(`div`);p.className=`ho`,d.appendChild(p);let m=null,h=null,g=null,_=`entry`,v=!1,y=!1,b=``,x=0,S=0,C=0,w=``;try{w=localStorage.getItem(n)||``}catch{}w||=`Racer`+Math.floor(10+Math.random()*90);let T=l.rejoin?.code||``,E=[],D=!1,re=async()=>h||=await t(()=>import(`./client-wxjKsTZn.js`),__vite__mapDeps([0,1]),import.meta.url),O=()=>!!g&&g.hostId===m?.id,ie=()=>g?.players.find(e=>e.id===m?.id),k=()=>Math.max(0,f.findIndex(e=>e.key===g?.level)),A=()=>Math.max(0,i-(g?.players.length||1)),j=e=>{let t=e&&typeof e==`object`&&typeof e.msg==`string`?e.msg:``;return!t||/reach|closed|did not answer|superseded/i.test(t)?a:t},M=()=>{let e=m;if(m=null,e){try{e.leave()}catch{}try{e.close()}catch{}}},N=e=>{b=e||``;let t=p.querySelector(`[data-k="err"]`);t&&(t.innerHTML=P(b))},P=e=>s(e).replace(`npm run online`,`<code>npm run online</code>`);async function F(t){if(!v){v=!0,N(``),K();try{let{createNet:n}=await re();M();let r=m=n(),i=()=>m===r;m.on(`lobby`,t=>{i()&&(g=t,t.phase&&(D=t.phase!==`lobby`),_!==`lobby`&&(_=`lobby`,S=0,C=0),q(),e.setTheme(t.level))}),m.on(`start`,t=>{if(!i())return;y=!0;let n=h.raceUrl(t).replace(/^\?/,``);location.search=`?`+n+(/(^|&)q=/.test(n)||!e.quality?``:`&q=${e.quality}`)});let o=(e,t)=>{let n=g?.players.find(t=>t.id===e);n&&(n.connected=t,q())};m.on(`away`,e=>{i()&&o(e.id,!1)}),m.on(`back`,e=>{i()&&o(e.id,!0)}),m.on(`host`,e=>{i()&&g&&(g.hostId=e.id,q())}),m.on(`results`,()=>{i()&&D&&(D=!1,q(),l.next&&I())}),m.on(`error`,e=>{i()&&g&&N(j(e))}),m.on(`close`,()=>{!y&&i()&&g&&(m=null,g=null,_=`entry`,S=0,q(),N(`Lost connection to the race server.
`+a))});let s=new Promise((e,t)=>m.on(`close`,()=>t({t:`error`,msg:`Connection closed`})));s.catch(()=>{});let c=await Promise.race([s,t.t===`create`?m.create(w):t.t===`join`?m.join(t.code,w):m.rejoin(t.code,t.token)]);E=Array.isArray(c?.lan)?c.lan:[],D=!!c?.phase&&c.phase!==`lobby`,q(),t.t===`rejoin`&&l.next&&!D&&I()}catch(e){M(),g=null,_=`entry`,q(),N(t.t===`rejoin`&&e?.msg?`Couldn’t rejoin room ${t.code}: ${e.msg}`:j(e))}finally{v=!1,K()}}}function I(){let e=()=>g&&O()?(m.setOptions({level:l.next,laps:g.laps,ai:g.ai}),l.next=null,!0):!!g;e()||setTimeout(e,300)}function L(e){w=(e||``).trim().slice(0,16)||w;try{localStorage.setItem(n,w)}catch{}}let R=()=>{L(p.querySelector(`[data-k="name"]`)?.value),F({t:`create`})};function z(){L(p.querySelector(`[data-k="name"]`)?.value);let e=(p.querySelector(`[data-k="code"]`)?.value||``).trim().toUpperCase();T=e,/^[A-Z0-9]{4}$/.test(e)?F({t:`join`,code:e}):(N(`Enter the 4-letter room code`),se(`code`))}function B(){y=!0,M();try{sessionStorage.removeItem(`hb_net`)}catch{}g=null,y=!1,_=`entry`,S=0,e.setTheme(null),new URLSearchParams(location.search).has(`online`)&&history.replaceState(null,``,location.pathname),q()}function V(t){if(!O()||D)return;let n={level:g.level,laps:g.laps,ai:g.ai,...t};n.ai=Math.max(0,Math.min(A(),n.ai)),Object.assign(g,n),q(),e.setTheme(n.level),m.setOptions(n)}let H=()=>g.players.filter(e=>e.id!==g.hostId&&e.ready&&e.connected).length;function U(){O()&&!D&&(H()<1&&Date.now()>x?(x=Date.now()+3e3,q(),setTimeout(q,3050)):m.start())}let W=()=>{let e=ie();e&&!D&&m.setReady(!e.ready)};async function ae(){let e=u(E)[0];if(!e)return;await G(e);let t=p.querySelector(`[data-act="copylan"] span`);t&&(t.textContent=`COPIED ✓`,setTimeout(()=>{t.isConnected&&(t.textContent=`COPY`)},1400))}async function G(e){try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select();try{document.execCommand(`copy`)}catch{}t.remove()}}async function oe(){let e=g?.code;if(!e)return;await G(e);let t=p.querySelector(`[data-act="copy"] span`);t&&(t.textContent=`COPIED ✓`,setTimeout(()=>{t.isConnected&&(t.textContent=`COPY`)},1400))}function K(){p.querySelectorAll(`[data-act="create"],[data-act="join"]`).forEach(e=>{e.disabled=v})}function q(){let t=`<div class="top"><div class="brand"><b>HOVERBIKE RACER</b><span>ONLINE</span></div><div class="lan">${ne(E)}</div></div>`;if(_===`entry`){p.innerHTML=t+`<div class="pnl entry">
        <h2>PLAY ONLINE</h2>
        <div><div class="lbl" style="margin-bottom:6px">YOUR RACER NAME</div><input data-k="name" data-f="0" maxlength="16" spellcheck="false" autocomplete="off" value="${s(w)}"></div>
        <div class="two">
          <div class="opt2"><h3>HOST A RACE</h3><p>Create a room and share its 4-letter code with friends on your Wi-Fi.</p>
            <div style="margin-top:auto"><button class="btn pri" data-act="create" data-f="1"><span>CREATE ROOM</span></button></div></div>
          <div class="opt2"><h3>JOIN A FRIEND</h3>
            <input class="code" data-k="code" data-f="2" maxlength="4" placeholder="CODE" spellcheck="false" autocomplete="off" value="${s(T)}">
            <button class="btn pri" data-act="join" data-f="3"><span>JOIN ROOM</span></button></div>
        </div>
        <div class="err" data-k="err">${P(b)}</div>
        <div class="row" style="justify-content:space-between"><button class="btn" data-act="back" data-f="4"><span>← BACK</span></button>
          <span class="note">↑↓ / TAB MOVE · ENTER SELECT · ESC BACK</span></div>
      </div>`;let e=p.querySelector(`[data-k="code"]`);e.addEventListener(`input`,()=>{let t=e.selectionStart;e.value=e.value.toUpperCase().replace(/[^A-Z0-9]/g,``),e.setSelectionRange(t,t),T=e.value}),p.querySelector(`[data-k="name"]`).addEventListener(`change`,e=>L(e.target.value)),K(),X();return}let n=g,a=O(),o=ie(),l=k(),u=[];n.players.forEach(e=>u.push(`<div class="pl${e.id===m.id?` me`:``}${e.connected?``:` off`}" style="--pc:${c(e.color)}">
        ${e.id===n.hostId?te:``}<span class="nm">${s(e.name)}</span>${e.id===m.id?`<span class="tag">YOU</span>`:``}${ee(e)}
        <span class="st ${e.connected?e.ready?`ok`:``:`off`}">${e.connected?e.ready?`✓ READY`:e.id===n.hostId?`HOST`:`NOT READY`:`RECONNECTING…`}</span></div>`));for(let e=0;e<Math.min(n.ai,i-n.players.length);e++)u.push(`<div class="pl ai empty"><span class="nm">AI RACER</span><span class="st">CPU</span></div>`);for(;u.length<i;)u.push(`<div class="pl empty"><span class="nm">OPEN SLOT</span></div>`);let d=a&&!D?``:` ro`,h=H(),v=Date.now()<x,y=J();p.innerHTML=t+`<div class="lob">
      <div class="left">
        <div class="pnl codebox"><div class="lbl">ROOM CODE</div>
          <div class="codes" data-k="codes">${[...n.code].map(e=>`<i>${s(e)}</i>`).join(``)}<button class="btn" data-act="copy"><span>COPY</span></button></div></div>
        <div class="pnl plist"><div class="lbl" style="margin-bottom:6px">RACERS · ${n.players.length} PLAYER${n.players.length>1?`S`:``}${n.ai?` + ${Math.min(n.ai,A())} AI`:``}</div>${u.join(``)}</div>
      </div>
      <div class="pnl right${d}">
        <div class="grp" data-g="0"><div class="sec"><span class="lbl">TRACK</span></div>
          <div class="tcards">${f.map((t,n)=>`<div class="tc${n===l?` sel`:``}" data-i="${n}" style="--ca:${e.theme(t.key).a}"><canvas></canvas><div class="nm">${s(t.title)}</div></div>`).join(``)}</div></div>
        <div class="opts">
          <div class="o grp" data-g="1"><span class="ol">LAPS</span><div class="seg">${r.map(e=>`<button data-laps="${e}" class="${e===n.laps?`on`:``}">${e}</button>`).join(``)}</div></div>
          <div class="o grp" data-g="2"><span class="ol">AI FILL</span><div class="step"><button data-ai="-1">−</button><span class="v">${Math.min(n.ai,A())}</span><button data-ai="1">+</button></div></div>
        </div>
        ${D?`<div class="wait">RACE STILL RUNNING — WAITING FOR IT TO FINISH</div>`:`<div class="note">${a?`YOU ARE THE HOST — PICK THE TRACK, THEN START`:`THE HOST PICKS THE TRACK · PRESS READY WHEN SET`}</div>`}
        <div class="err" data-k="err">${P(b)}</div>
        <div class="acts">
          ${y.map((e,t)=>e===`ready`?`<button class="btn ${o?.ready?`on`:``}" data-act="ready" data-ai-i="${t}"${D?` disabled`:``}><span>${o?.ready?`✓ READY`:`READY`}</span></button>`:e===`start`?`<button class="btn start ${h?`pri`:v?`warn`:``}" data-act="start" data-ai-i="${t}"${D?` disabled`:``}><span>${h?`START RACE`:v?`CLICK AGAIN TO FORCE`:`FORCE START`}</span></button>`:`<button class="btn" data-act="leave" data-ai-i="${t}"><span>LEAVE</span></button>`).join(``)}
        </div>
      </div>
    </div>`,p.querySelectorAll(`.tc canvas`).forEach((t,n)=>e.paintCard(t,f[n].key)),X()}let J=()=>D?[`leave`]:O()?[`ready`,`start`,`leave`]:[`ready`,`leave`],Y=()=>O()&&!D?[0,1,2,3]:[3];function X(){if(p.querySelectorAll(`.focus`).forEach(e=>e.classList.remove(`focus`)),_===`entry`){let e=p.querySelector(`[data-f="${S}"]`);if(!e)return;e.tagName===`INPUT`?document.activeElement!==e&&e.focus():(document.activeElement?.tagName===`INPUT`&&document.activeElement.blur(),e.classList.add(`focus`));return}let e=Y();S=Math.min(S,e.length-1);let t=e[S];t<3?p.querySelector(`[data-g="${t}"]`)?.classList.add(`focus`):(C=Math.min(C,J().length-1),p.querySelector(`[data-ai-i="${C}"]`)?.classList.add(`focus`))}function se(e){let t=p.querySelector(`[data-k="${e}"]`);t&&(S=+t.dataset.f,X())}function Z(e){if(_===`entry`){S=(S+e+5)%5,X();return}let t=Y().length;S=(S+e+t)%t,X()}function Q(e){if(_===`entry`){Z(e);return}let t=Y()[S];if(t===0)V({level:f[(k()+e+f.length)%f.length].key});else if(t===1)V({laps:r[Math.max(0,Math.min(r.length-1,r.indexOf(g.laps)+e))]??3});else if(t===2)V({ai:g.ai+e});else{let t=J().length;C=(C+e+t)%t,X()}}function ce(){if(_===`entry`)return[()=>se(`code`),R,z,z,$][S]?.();Y()[S]<3?(S=Y().length-1,C=+!!O(),X()):{ready:W,start:U,leave:B}[J()[C]]()}function $(){_===`lobby`?(S=Y().length-1,C=J().indexOf(`leave`),X()):(le(),e.back())}function le(){y=!0,p.remove()}if(p.addEventListener(`click`,e=>{let t=e.target.closest(`.tc`);if(t&&O()&&!D){V({level:f[+t.dataset.i].key});return}let n=e.target.closest(`button`);if(!n||n.disabled)return;if(n.dataset.laps)return V({laps:+n.dataset.laps});if(n.dataset.ai)return V({ai:g.ai+ +n.dataset.ai});let r=n.dataset.act;n.dataset.aiI&&(C=+n.dataset.aiI),n.dataset.f&&(S=+n.dataset.f),{create:R,join:z,back:$,copy:oe,copylan:ae,ready:W,start:U,leave:B}[r]?.()}),p.addEventListener(`focusin`,e=>{e.target.dataset?.f&&(S=+e.target.dataset.f,X())}),q(),l.rejoin){let e=null;try{e=JSON.parse(sessionStorage.getItem(`hb_net`))}catch{}e?.token&&(!l.rejoin.code||e.code===l.rejoin.code)?F({t:`rejoin`,code:e.code,token:e.token}):N(`No saved seat for room ${l.rejoin.code||``} — enter the code to join again.`)}return{key(e){let t=e.code,n=document.activeElement?.tagName===`INPUT`;if(t===`Escape`)$();else if(t===`Tab`)Z(e.shiftKey?-1:1);else if(t===`ArrowUp`)Z(-1);else if(t===`ArrowDown`)Z(1);else if((t===`ArrowLeft`||t===`ArrowRight`)&&!n)Q(t===`ArrowLeft`?-1:1);else if(t===`Enter`||t===`NumpadEnter`||t===`Space`&&!n)ce();else if(t===`KeyC`&&!n&&_===`lobby`)oe();else return!1;return e.preventDefault(),!0},pad(e){({L:()=>Q(-1),R:()=>Q(1),U:()=>Z(-1),D:()=>Z(1),A:ce,B:$})[e]?.()}}}export{d as showOnline};