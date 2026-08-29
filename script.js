const OWNER='PedroZoltraak';
const REPO='Zoltraak-Control';
const FALLBACK_VERSION='v1.0';

const throttleLine=document.getElementById('throttleLine'), brakeLine=document.getElementById('brakeLine'), throttleArea=document.getElementById('throttleArea'), brakeArea=document.getElementById('brakeArea');
const thrBar=document.getElementById('thrBar'), brkBar=document.getElementById('brkBar'), ersBar=document.getElementById('ersBar');
const thrValue=document.getElementById('thrValue'), brkValue=document.getElementById('brkValue'), ersValue=document.getElementById('ersValue'), wheel=document.getElementById('wheel'), speedValue=document.getElementById('speedValue'), gearValue=document.getElementById('gearValue');
const latestVersion=document.getElementById('latestVersion'), heroVersion=document.getElementById('heroVersion'), downloadVersion=document.getElementById('downloadVersion'), downloadCount=document.getElementById('downloadCount'), heroDownload=document.getElementById('heroDownload'), mainDownload=document.getElementById('mainDownload');
const RELEASES=`https://github.com/${OWNER}/${REPO}/releases`;
const API=`https://api.github.com/repos/${OWNER}/${REPO}`;

const copy={
pt:{
 nav_product:'Produto',nav_features:'Recursos',nav_setup:'Configuração',nav_about:'Sobre',nav_download:'Download',
 hero_badge:'ZOLTRAAK F1 TELEMETRY • F1 26',hero_title_1:'Dados que acompanham',hero_title_2:'cada movimento.',hero_lead:'Uma overlay leve e personalizável para acompanhar throttle, brake, ERS, steering, velocidade, combustível e Active Aero sem tirar o foco da pista.',download_now:'Baixar Zoltraak Control',see_product:'Ver o Control',latest_release:'versão atual',downloads:'downloads',hero_note:'Zoltraak F1 Telemetry • projeto pessoal • gratuito para testar • ainda em desenvolvimento',hero_device_caption:'Entradas ao vivo. Layout do seu jeito.',chip_latency:'RESPOSTA',chip_realtime:'TEMPO REAL',stat_rate:'Atualização contínua',stat_udp:'Conexão direta com F1 26',stat_modular:'Escolha cada elemento',stat_free:'Projeto pessoal gratuito',
 ui_eyebrow:'O CONTROL DE VERDADE',ui_title:'Configure sem complicação.',ui_lead:'Uma interface única para ativar a overlay, escolher módulos, ajustar tamanho, opacidade e preparar tudo antes de entrar na pista.',callout_preview_title:'Preview instantâneo',callout_preview_text:'Veja o layout antes de abrir o jogo.',callout_control_title:'Ajustes em tempo real',callout_control_text:'Escala, largura, altura e opacidade.',gallery_panel:'Painel principal',gallery_panel_sub:'Overlay e personalização',gallery_guide:'Guia integrado',gallery_guide_sub:'UDP explicado dentro do app',gallery_about:'Sobre o projeto',gallery_about_sub:'Versão, novidades e identidade',
 game_eyebrow:'FEITO PARA A PISTA',game_title:'Informação útil sem poluir a visão.',game_lead:'A overlay acompanha seus inputs em tempo real enquanto você dirige. O objetivo é mostrar exatamente o necessário para entender sua pilotagem.',game_f1_title:'Throttle & Brake',game_f1_text:'Aplicação, release e histórico visual dos pedais.',game_f2_title:'Steering & velocidade',game_f2_text:'Correções de volante, marcha e KPH em um único bloco.',game_f3_title:'ERS, combustível e Active Aero',game_f3_text:'Dados importantes sem precisar abrir outra janela.',game_callout:'OVERLAY COMPLETA',
 custom_eyebrow:'PERSONALIZAÇÃO',custom_title:'Sua tela. Seus dados.',custom_lead:'Não quer usar tudo? Desative módulos e o layout se compacta automaticamente. Ajuste posição, tamanho e transparência até encaixar no seu cockpit.',layout_full:'Completa',layout_full_text:'Todos os módulos ativos',layout_compact:'Compacta',layout_compact_text:'Só os dados que você usa',layout_minimal:'Minimalista',layout_minimal_text:'Mais espaço para o jogo',layout_live:'LAYOUT DINÂMICO',pill_move:'↔ Mover',pill_resize:'↗ Redimensionar',pill_opacity:'◐ Opacidade',pill_modules:'⊞ Módulos',pill_save:'✓ Preferências salvas',
 setup_eyebrow:'CONFIGURAÇÃO',setup_title:'Na pista em poucos minutos.',setup_lead:'O próprio Control inclui um guia. Você só precisa apontar o F1 26 para o endereço e porta corretos.',s1_title:'Instale',s1_text:'Baixe o instalador oficial pelo GitHub Releases e conclua a instalação no Windows.',s2_title:'Conecte',s2_text:'No F1 26: UDP 127.0.0.1, porta 20777, formato 2026 e frequência de 60 Hz.',s3_title:'Personalize',s3_text:'Selecione os módulos e ajuste escala, posição, largura, altura e opacidade.',s4_title:'Dirija',s4_text:'Ative a overlay e acompanhe os seus inputs em tempo real durante a sessão.',udp_title:'Configuração recomendada',udp_sub:'F1 26 → Settings → Telemetry Settings',
 about_eyebrow:'SOBRE O PROJETO',about_title:'Começou porque eu queria usar.',about_p1:'O Zoltraak Control Telemetry nasceu como um projeto pessoal para o meu próprio uso no F1 26. Eu queria uma telemetria simples, personalizável e gratuita, mas não encontrava algo que funcionasse exatamente do jeito que eu imaginava.',about_p2:'Então decidi criar a minha própria e compartilhar com quem também quiser testar. Não é um produto profissional ou comercial. Ainda está em desenvolvimento, pode precisar de ajustes e será melhorado com o tempo.',about_quote:'“Obrigado por instalar e dar uma oportunidade ao meu projeto pessoal Zoltraak Control Telemetry.”',made_by:'Feito por',about_status:'STATUS',about_status_value:'EM DESENVOLVIMENTO',
 download_badge:'VERSÃO PÚBLICA • WINDOWS',download_title:'Pronto para testar?',download_text:'Baixe gratuitamente pelo GitHub Releases. A instalação é simples e suas preferências ficam salvas para as próximas versões.',download_installer:'Baixar instalador',all_releases:'Ver versões',download_version:'VERSÃO',download_os:'SISTEMA',download_price:'PREÇO',download_source:'FONTE',faq_title:'Antes de instalar.',faq1_q:'É gratuito?',faq1_a:'Sim. O Zoltraak Control Telemetry é um projeto pessoal compartilhado gratuitamente para quem quiser testar.',faq2_q:'Funciona em qual jogo?',faq2_a:'A versão atual foi criada para a telemetria UDP do F1 26 no Windows.',faq3_q:'Ainda pode ter bugs?',faq3_a:'Sim. O projeto ainda está em desenvolvimento e continuará recebendo correções e melhorias.',faq4_q:'Preciso pagar por futuras versões?',faq4_a:'Não existe cobrança planejada para este projeto pessoal. As versões são publicadas pelo GitHub Releases.',footer_copy:'Projeto pessoal de telemetria para F1 26.',legal:'Projeto independente e não afiliado à Formula 1, EA SPORTS ou Codemasters. F1 é marca de seus respectivos proprietários.',panel_alt:'Painel principal do Zoltraak Control Telemetry'
},
en:{
 nav_product:'Product',nav_features:'Features',nav_setup:'Setup',nav_about:'About',nav_download:'Download',
 hero_badge:'ZOLTRAAK F1 TELEMETRY • F1 26',hero_title_1:'Data that follows',hero_title_2:'every movement.',hero_lead:'A lightweight, customizable overlay for throttle, brake, ERS, steering, speed, fuel and Active Aero without taking your focus away from the track.',download_now:'Download Zoltraak Control',see_product:'See the Control',latest_release:'current version',downloads:'downloads',hero_note:'Zoltraak F1 Telemetry • personal project • free to try • still in development',hero_device_caption:'Live inputs. Your layout.',chip_latency:'RESPONSE',chip_realtime:'REAL TIME',stat_rate:'Continuous update',stat_udp:'Direct F1 26 connection',stat_modular:'Choose every element',stat_free:'Free personal project',
 ui_eyebrow:'THE ACTUAL CONTROL',ui_title:'Configure without the hassle.',ui_lead:'One interface to activate the overlay, choose modules, adjust size and opacity, and prepare everything before going on track.',callout_preview_title:'Instant preview',callout_preview_text:'See the layout before opening the game.',callout_control_title:'Real-time controls',callout_control_text:'Scale, width, height and opacity.',gallery_panel:'Main panel',gallery_panel_sub:'Overlay and customization',gallery_guide:'Built-in guide',gallery_guide_sub:'UDP explained inside the app',gallery_about:'About the project',gallery_about_sub:'Version, updates and identity',
 game_eyebrow:'BUILT FOR THE TRACK',game_title:'Useful information without clutter.',game_lead:'The overlay follows your inputs in real time while you drive. The goal is to show exactly what you need to understand your driving.',game_f1_title:'Throttle & Brake',game_f1_text:'Application, release and visual pedal history.',game_f2_title:'Steering & speed',game_f2_text:'Steering corrections, gear and KPH in one block.',game_f3_title:'ERS, fuel & Active Aero',game_f3_text:'Important data without opening another window.',game_callout:'FULL OVERLAY',
 custom_eyebrow:'CUSTOMIZATION',custom_title:'Your screen. Your data.',custom_lead:"Don't need everything? Disable modules and the layout automatically compacts. Adjust position, size and transparency until it fits your cockpit.",layout_full:'Full',layout_full_text:'All modules enabled',layout_compact:'Compact',layout_compact_text:'Only the data you use',layout_minimal:'Minimal',layout_minimal_text:'More room for the game',layout_live:'DYNAMIC LAYOUT',pill_move:'↔ Move',pill_resize:'↗ Resize',pill_opacity:'◐ Opacity',pill_modules:'⊞ Modules',pill_save:'✓ Preferences saved',
 setup_eyebrow:'SETUP',setup_title:'On track in a few minutes.',setup_lead:'The Control includes its own guide. You only need to point F1 26 to the correct address and port.',s1_title:'Install',s1_text:'Download the official installer through GitHub Releases and complete the Windows installation.',s2_title:'Connect',s2_text:'In F1 26: UDP 127.0.0.1, port 20777, format 2026 and 60 Hz rate.',s3_title:'Customize',s3_text:'Choose modules and adjust scale, position, width, height and opacity.',s4_title:'Drive',s4_text:'Enable the overlay and follow your inputs in real time during the session.',udp_title:'Recommended configuration',udp_sub:'F1 26 → Settings → Telemetry Settings',
 about_eyebrow:'ABOUT THE PROJECT',about_title:'It started because I wanted to use it.',about_p1:"Zoltraak Control Telemetry started as a personal project for my own use in F1 26. I wanted telemetry that was simple, customizable and free, but couldn't find something that worked exactly the way I imagined.",about_p2:'So I decided to build my own and share it with anyone who wants to try it. This is not a professional or commercial product. It is still in development, may need adjustments, and will improve over time.',about_quote:'“Thank you for installing and giving my personal project Zoltraak Control Telemetry a chance.”',made_by:'Made by',about_status:'STATUS',about_status_value:'IN DEVELOPMENT',
 download_badge:'PUBLIC VERSION • WINDOWS',download_title:'Ready to try it?',download_text:'Download it for free through GitHub Releases. Installation is simple and your preferences stay saved for future versions.',download_installer:'Download installer',all_releases:'View releases',download_version:'VERSION',download_os:'SYSTEM',download_price:'PRICE',download_source:'SOURCE',faq_title:'Before installing.',faq1_q:'Is it free?',faq1_a:'Yes. Zoltraak Control Telemetry is a personal project shared for free with anyone who wants to try it.',faq2_q:'Which game does it support?',faq2_a:'The current version was built for F1 26 UDP telemetry on Windows.',faq3_q:'Can it still have bugs?',faq3_a:'Yes. The project is still in development and will continue receiving fixes and improvements.',faq4_q:'Will I need to pay for future versions?',faq4_a:'There is no planned charge for this personal project. Releases are published through GitHub Releases.',footer_copy:'Personal telemetry project for F1 26.',legal:'Independent project and not affiliated with Formula 1, EA SPORTS or Codemasters. F1 is a trademark of its respective owners.',panel_alt:'Zoltraak Control Telemetry main panel'
}}

let lang=localStorage.getItem('zct-lang')||'pt';
function applyLanguage(){
 document.documentElement.lang=lang==='pt'?'pt-BR':'en';
 document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(copy[lang][k]) el.textContent=copy[lang][k]});
 document.querySelectorAll('[data-i18n-alt]').forEach(el=>{const k=el.dataset.i18nAlt;if(copy[lang][k]) el.alt=copy[lang][k]});
 document.getElementById('langToggle').textContent=lang==='pt'?'EN':'PT';
 localStorage.setItem('zct-lang',lang);
}
document.getElementById('langToggle').addEventListener('click',()=>{lang=lang==='pt'?'en':'pt';applyLanguage()});
applyLanguage();

document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.getElementById('nav'),menuToggle=document.getElementById('menuToggle');
menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open))});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Animated telemetry mock — deliberately paced like real driving inputs
const history=Array.from({length:58},()=>({t:0,b:0}));
const clamp=v=>Math.max(0,Math.min(1,v));
const telemetryStart=performance.now();
let lastHistorySample=0;
function pathFor(key,baseline){const w=430;return history.map((p,i)=>`${i?'L':'M'} ${(i/(history.length-1))*w} ${baseline-p[key]*82}`).join(' ')}
function areaFor(key,baseline){const w=430;return `${pathFor(key,baseline)} L ${w} ${baseline} L 0 ${baseline} Z`}
function telemetryTick(now){
 const time=(now-telemetryStart)/1000;
 const cycle=time%8;
 let throttle=0,brake=0;

 // A calm 8-second driving cycle: progressive throttle, lift, hard brake,
 // trail braking and progressive acceleration again.
 if(cycle<2.4) throttle=clamp(cycle/1.6);
 else if(cycle<3.15) throttle=clamp(1-(cycle-2.4)/.6);
 else if(cycle<4.05) brake=clamp((cycle-3.15)/.28)*clamp(1-(cycle-3.75)/.3);
 else if(cycle<5.0) brake=clamp(1-(cycle-4.05)/.95)*.75;
 else throttle=clamp((cycle-5)/1.7)*.96;

 // Sample the history at 25 Hz so the graph advances naturally instead of racing.
 if(now-lastHistorySample>=40){
  history.push({t:throttle,b:brake});history.shift();lastHistorySample=now;
 }
 throttleLine.setAttribute('d',pathFor('t',112));brakeLine.setAttribute('d',pathFor('b',112));throttleArea.setAttribute('d',areaFor('t',112));brakeArea.setAttribute('d',areaFor('b',112));

 const ers=clamp(.62+.22*Math.sin(time*.55));
 thrBar.style.setProperty('--fill',`${Math.round(throttle*100)}%`);brkBar.style.setProperty('--fill',`${Math.round(brake*100)}%`);ersBar.style.setProperty('--fill',`${Math.round(ers*100)}%`);
 thrValue.textContent=`${Math.round(throttle*100)}%`;brkValue.textContent=`${Math.round(brake*100)}%`;ersValue.textContent=`${Math.round(ers*100)}%`;

 const steer=Math.sin(time*1.35)*8+Math.sin(time*2.7)*3;
 wheel.style.transform=`rotate(${steer}deg)`;
 const speed=Math.round(145+throttle*165-brake*72+Math.sin(time*.8)*12);
 speedValue.textContent=Math.max(52,speed);
 gearValue.textContent=Math.max(2,Math.min(8,Math.round(speed/45)));
 requestAnimationFrame(telemetryTick);
}
requestAnimationFrame(telemetryTick);

// Layout selector
const overlay=document.getElementById('layoutOverlay'),layoutName=document.getElementById('layoutName'),layoutScreenshot=document.getElementById('layoutScreenshot');
document.querySelectorAll('.custom-tab').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.custom-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const type=btn.dataset.layout;overlay.className='layout-overlay'+(type==='full'?'':` ${type}`);layoutName.textContent=type.toUpperCase();layoutScreenshot.src=type==='full'?'assets/gameplay-full.webp':'assets/gameplay-compact.webp';
}));

// Gallery lightbox
const lightbox=document.getElementById('lightbox'),lightboxImage=document.getElementById('lightboxImage');
document.querySelectorAll('.gallery-card').forEach(btn=>btn.addEventListener('click',()=>{lightboxImage.src=btn.dataset.image;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')}
document.getElementById('lightboxClose').addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});

// GitHub release data
function setVersion(v){const clean=v||FALLBACK_VERSION;latestVersion.textContent=clean;heroVersion.textContent=clean;downloadVersion.textContent=clean}
async function loadRelease(){
 try{
  const latest=await fetch(`${API}/releases/latest`,{headers:{Accept:'application/vnd.github+json'}}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()});
  setVersion(latest.tag_name||FALLBACK_VERSION);
  const assets=latest.assets||[];
  const asset=assets.find(a=>/^Zoltraak-Control-Setup-v1\.0-FINAL\.exe$/i.test(a.name))||assets.find(a=>/Zoltraak-Control-Setup.*\.exe$/i.test(a.name))||assets.find(a=>/\.exe$/i.test(a.name));
  if(asset){heroDownload.href=asset.browser_download_url;mainDownload.href=asset.browser_download_url}
  const all=await fetch(`${API}/releases?per_page=100`,{headers:{Accept:'application/vnd.github+json'}}).then(r=>r.ok?r.json():[]);
  const count=(Array.isArray(all)?all:[]).flatMap(r=>r.assets||[]).filter(a=>/Zoltraak-Control-Setup/i.test(a.name)).reduce((n,a)=>n+(a.download_count||0),0);
  downloadCount.textContent=count.toLocaleString(lang==='pt'?'pt-BR':'en-US');
 }catch(e){setVersion(FALLBACK_VERSION);downloadCount.textContent='—'}
}
loadRelease();

// simple header state
addEventListener('scroll',()=>document.querySelector('.site-header').classList.toggle('scrolled',scrollY>20),{passive:true});
