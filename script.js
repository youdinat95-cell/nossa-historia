const episodios={
1:['img/Foto 1.jpeg','img/Foto 2.jpeg','img/Foto 3.jpeg'],
2:['img/Foto 4.jpeg','img/Foto 5.jpeg','img/Foto 6.jpeg','img/Foto 7.jpeg'],
3:['img/Foto 8.jpeg','img/Foto 9.jpeg','img/Foto 10.jpeg','img/Foto 11.jpeg'],
4:['img/Foto 12.jpeg','img/Foto 13.jpeg','img/Foto 14.jpeg','img/Foto 15.jpeg'],
5:['img/Foto 16.jpeg','img/Foto 17.jpeg','img/Foto 18.jpeg']
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
