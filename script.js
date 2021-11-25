let video = document.getElementById("video1");
setInterval(hasEnded, 500);
let icoPlay = document.getElementById("play");

function retroceder() {
   
    video.currentTime -= 10;
}

function avancar() {
    video.currentTime += 10;
}

function diminuirV() {
      video.playbackRate -= 0.1;

}

function aumentarV() {
    video.playbackRate += 0.1;
}

let count = 0;
function play() {
   
    video.play();
    if(count%2===0){
        
        icoPlay.src = "assets/botoes/icons8-play-dentro-de-um-círculo-50.png";
    } else {
        video.pause();
        icoPlay.src = "assets/botoes/pause.png";
    }
    count++;

}

function stop() {
    video.pause();
    video.currentTime = 0;
    icoPlay.src = "assets/botoes/icons8-play-dentro-de-um-círculo-50.png";
    count++;
}


function hasEnded(){
    if(video.ended===true){
        // stop();
        video.play();
    }
}