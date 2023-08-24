var timer = 60;
var score = 0;
var numhit = 0;


function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 360; i++) {
        var num = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${num}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var time = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = `<h1 id="h">GAME OVER</h1>`
        }
    }, 1000);
}

function hitVar(){
     numhit = Math.floor(Math.random() * 10)
    document.querySelector("#hit").innerHTML = numhit;
}

function scoreGo(){
    
    document.querySelector("#score").innerHTML=score
    score += 10;
}

document.querySelector("#pbtm").addEventListener("click",(dets)=>{
    var numclicked=Number(dets.target.textContent);
    if(numclicked===numhit){
        scoreGo();
        makeBubble();
        hitVar();
    }
})


runTimer();
makeBubble();
hitVar();
scoreGo();