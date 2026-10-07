/* Todo este conjunto é FICTÍCIO. Não representa resultados do perfil real. */
(() => {
  let seed = 47;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const last = Date.UTC(2026, 9, 6);
  const daily = [];
  for (let i = 0; i < 360; i++) {
    const date = new Date(last - (359-i)*86400000).toISOString().slice(0,10);
    const trend = .65 + i/360*.65;
    const reach = Math.round((36000 + random()*45000 + (i%17===0 ? 95000 : 0))*trend);
    const gained = Math.round(reach*(.0026+random()*.0019));
    const reachFollowers=Math.round(reach*(.11+random()*.16));
    const profileVisits=Math.round(reach*(.009+random()*.012));
    daily.push({date, reachFollowers, reachNonFollowers:reach-reachFollowers, profileVisits, externalLinkClicks:Math.round(profileVisits*(.08+random()*.09)), reach, views:Math.round(reach*(1.6+random()*.8)), engagedAccounts:Math.round(reach*(.08+random()*.06)), followersGained:gained, followersLost:Math.round(9+random()*28), likes:Math.round(reach*.08), comments:Math.round(reach*.003), shares:Math.round(reach*(.012+random()*.012)), saves:Math.round(reach*.006)});
  }
  let followers = 128450 - daily.reduce((s,d)=>s+d.followersGained-d.followersLost,0);
  daily.forEach(d => {followers += d.followersGained-d.followersLost;d.followersTotal=followers;});
  const themes = ['Atualidades','Análise','Bastidores','Comunidade'];
  const titles = [
    'O contexto que ficou fora da manchete','Três pontos para entender a notícia','Bastidores de uma conversa ao vivo','Uma pergunta para nossa comunidade',
    'O que essa notícia muda na prática?','O resumo da semana em cinco fatos','Uma conversa além dos 30 segundos','Como apuramos antes de comentar',
    'O detalhe que merece sua atenção','Respondendo às perguntas de vocês','Por trás de cada transmissão','Salve para consultar depois'
  ];
  const formats = ['reel','imagem','carrossel'];
  const posts = [];
  daily.forEach((d,i) => {
    const count = i%5===0 ? 0 : (i%3===0 ? 2 : 1);
    for(let j=0;j<count;j++) {
      const idx=posts.length, format=formats[random()<.46?0:random()<.55?1:2];
      const views = Math.round((5000+random()*85000)*(format==='reel'?1.8:1)*(i/360+.5)+(idx%19===0?140000:0));
      const reach = Math.round(views*(.58+random()*.18));
      const durationSeconds = format==='reel'?Math.round(18+random()*70):null;
      const averageWatchSeconds = format==='reel'?Math.round(durationSeconds*(.25+random()*.4)):null;
      const hours=[6,8,10,12,14,16,18,20,22];
      const hour=hours[Math.floor(random()*hours.length)];
      const publishedAt=`${d.date}T${String(hour).padStart(2,'0')}:00:00-03:00`;
      const age=Math.max(0,(last+86399000-Date.parse(publishedAt))/86400000);
      const snapshots=[1,3,7,30].filter(n=>n<=age).map(n=>({ageDays:n,views:Math.round(views*Math.min(1,(n===1?.23+random()*.16:n===3?.52+random()*.14:n===7?.79+random()*.15:1)))}));
      posts.push({id:`demo-${idx+1}`,publishedAt,hour,ageDays:age,objective:['Alcance','Autoridade','Conversa','Conversão'][Math.floor(random()*4)],date:d.date,title:titles[idx%titles.length],theme:themes[Math.floor(random()*themes.length)],format,url:null,views,reach,likes:Math.round(views*(.035+random()*.03)),comments:Math.round(views*(.001+random()*.003)),shares:Math.round(views*(.009+random()*.03)),saves:Math.round(views*(format==='carrossel'?.022:.004)),profileVisits:format==='reel'?null:Math.round(reach*(.006+random()*.026)),attributedFollows:format==='reel'?null:Math.round(reach*(.001+random()*.009)),durationSeconds,averageWatchSeconds,skipRate:format==='reel'?Math.round(24+random()*38):null,snapshots});
    }
  });
  window.DASHBOARD_DATA = {mode:'demo',profile:{name:'Allan dos Santos',handle:'47contadoallan',followers:128450},meta:{source:'Dados demonstrativos',referenceDate:'2026-10-06',collectedAt:'2026-10-06T23:59:59Z',timezone:'America/Sao_Paulo',version:2},daily,posts,audience:{gender:[{label:'Homens',value:58},{label:'Mulheres',value:40},{label:'Não informado',value:2}],age:[{label:'18–24',value:10},{label:'25–34',value:27},{label:'35–44',value:31},{label:'45–54',value:20},{label:'55+',value:12}],cities:[{label:'São Paulo',value:24},{label:'Rio de Janeiro',value:18},{label:'Belo Horizonte',value:12},{label:'Brasília',value:10},{label:'Outras cidades',value:36}]}};
})();
