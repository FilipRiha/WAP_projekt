const button = document.getElementById("button");
const div = document.getElementById("div");
const zivoty = document.getElementById("zivoty");
const zivoty2 = document.getElementById("zivoty2");
const info = document.getElementById("info");
const level =document.getElementById("level");

button.onmousedown = () => {
  if(zivoty.innerHTML>0&&zivoty2.innerHTML>0){
    div.style.left = "850px";
    zivoty2.innerHTML--;
  }
  if (zivoty2.innerHTML <= 0) {
    info.innerText = "stihl";
    
    clearInterval(interval);
  } 
};


button.onmouseup = () => {
  div.style.left = "250px";
};
const interval = setInterval(()=>{
zivoty.innerHTML--;
if(zivoty.innerHTML<=0){
    info.innerHTML="nestihl"
    info.style.backgroundImage="url(./res/img/pit_eror)";
    clearInterval(interval);
}

},500)