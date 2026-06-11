const episodios={
1:['img/foto 1.jpeg','img/foto 2.jpeg','img/foto 3.jpeg'],
2:['img/foto 4.jpeg','img/foto 5.jpeg','img/foto 6.jpeg','img/foto 7.jpeg'],
3:['img/foto 8.jpeg','img/foto 9.jpeg','img/foto 10.jpeg','img/foto 11.jpeg'],
4:['img/foto 12.jpeg','img/foto 13.jpeg','img/foto 14.jpeg','img/foto 15.jpeg'],
5:['img/foto 16.jpeg','img/foto 17.jpeg','img/foto 18.jpeg']
};

Object.entries(episodios).forEach(([ep,imgs])=>{
 const g=document.getElementById('gallery-'+ep);
 imgs.forEach(src=>{
  const i=document.createElement('img');
  i.src=src;
  g.appendChild(i);
 });
});

document.getElementById('playBtn').onclick=()=>{
 document.getElementById('bgMusic').play();
 window.scrollTo({top:window.innerHeight,behavior:'smooth'});
};

const start=new Date('2021-07-03');
function update(){
 const days=Math.floor((Date.now()-start)/(1000*60*60*24));
 document.getElementById('relationshipCounter').textContent=days+' dias juntos';
}
update(); setInterval(update,60000);

setInterval(()=>{
 const h=document.createElement('div');
 h.className='heart'; h.textContent='❤️';
 h.style.left=Math.random()*100+'%';
 document.getElementById('hearts').appendChild(h);
 setTimeout(()=>h.remove(),8000);
},500);
