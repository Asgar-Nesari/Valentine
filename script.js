function moveRandom(el){
  el.style.position="absolute";
  el.style.top=Math.floor(Math.random()*90+5)+"%";
  el.style.left=Math.floor(Math.random()*90+5)+"%";
}

const Move=document.getElementById("move-random");

Move.addEventListener("mouseenter",function(e){
  moveRandom(e.target);
});

