
const W=[
["Beginner’s Guide to Your First CTF","Mar 2026","What I wish I knew before my first capture-the-flag: tools, mindset and snacks.",["CTF","Beginner"]],
["Cracking a Classic Crypto Challenge","Feb 2026","A step-by-step walkthrough of a substitution cipher challenge.",["CTF","Crypto"]],
["My Cozy Dev Setup","Jan 2026","Terminal themes, fonts and the playlist that keeps me focused.",["Life","Tools"]],
["Intro to Web Security Basics","Dec 2025","XSS, CSRF and SQLi explained without the jargon overload.",["Web","Beginner"]],
["Journaling for Learning","Nov 2025","How a nightly notebook habit made me better at retaining new skills.",["Life"]],
["Lab Notes: Setting Up a Home Lab","Oct 2025","Virtual machines, networking and breaking things safely.",["Tools","Web"]]];
const P=[
["Starlight Notes","A cozy markdown note-taking app with moon-phase themes.",["JavaScript","CSS","IndexedDB"]],
["Packet Pal","A friendly network traffic visualizer for learning how data moves.",["Python","Scapy","Flask"]],
["CTF Tracker","Track challenges, flags and write-ups for your team.",["React","Node","SQLite"]],
["Mood Moon","A tiny mood journal that charts your month as moon phases.",["HTML","CSS","JS"]],
["Password Sparkle","A strength checker that teaches you why a password is weak.",["TypeScript","Vite"]],
["Lo-fi Radio","A pastel web player with sleepy playlists and a rain mode.",["Web Audio","Svelte"]]];
const A=[
["🏆","CTF Competition: Top 10","Oct 2026","Placed in the top 10 out of 300+ teams."],
["📜","Security+ Certification","Aug 2026","Passed my first industry certification."],
["🎓","Dean’s List","May 2026","Recognised for academic excellence."],
["🚀","First Open-Source Contribution","Mar 2026","Had a pull request merged into a project I love."],
["🎤","Spoke at a Student Tech Meetup","Jan 2026","Gave my first ever talk on web security basics."],
["⭐","Scholarship Recipient","Sep 2025","Awarded a scholarship for women in tech."],
["🌸","Started This Portfolio","Today","A little corner of the internet that’s all mine."]];
const $=s=>document.querySelector(s);
const pills=(a,c)=>a.map(t=>`<span class="pill ${c||''}">${t}</span>`).join('');
let tag='All';
function wr(){if(!$('#wf'))return;
  const tags=['All',...new Set(W.flatMap(w=>w[3]))];
  $('#wf').innerHTML=tags.map(t=>`<button class="${t===tag?'on':''}" data-t="${t}">${t}</button>`).join('');
  $('#wg').innerHTML=W.filter(w=>tag==='All'||w[3].includes(tag)).map(w=>`<article class="card"><span class="date">${w[1]}</span><h3>${w[0]}</h3><p>${w[2]}</p><div class="tags">${pills(w[3])}</div><a class="more" href="https://example.com" target="_blank" rel="noopener">Read more →</a></article>`).join('');
}
$('#wf')&&$('#wf').addEventListener('click',e=>{const b=e.target.closest('button');if(b){tag=b.dataset.t;wr()}});
wr();
if($('#pg'))$('#pg').innerHTML=P.map(p=>`<article class="card"><h3>${p[0]}</h3><p>${p[1]}</p><div class="tags">${pills(p[2],'pk')}</div><div class="links"><a class="btn" href="https://github.com/" target="_blank" rel="noopener">GitHub</a><a class="btn fill" href="https://example.com" target="_blank" rel="noopener">Demo</a></div></article>`).join('');
if($('#at'))$('#at').innerHTML=A.map(a=>`<div class="ach"><span class="ic">✦</span><span class="date">${a[2]}</span><h3>${a[0]} ${a[1]}</h3><p>${a[3]}</p></div>`).join('');
$('#cf')&&$('#cf').addEventListener('submit',e=>{e.preventDefault();e.target.style.display='none';$('#ty').style.display='block'});
const cur=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')===cur||(cur===''&&a.getAttribute('href')==='index.html')));
