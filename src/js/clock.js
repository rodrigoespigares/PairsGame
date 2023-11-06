let mySeconds = 0;
let timer = null;

function reload() {
    let second = document.getElementById("second")
    second.textContent="00";
    let minutes = document.getElementById("minutes")
    minutes.textContent = "00";
}

function reset(){
    document.getElementById("reset").addEventListener("click",() => {
        reload();
        clearInterval(timer);
        timer = null;
        mySeconds= 0;
    })
    
}
function time(){
    mySeconds++;
    document.getElementById("second").textContent = checkMS(mySeconds % 60);
    document.getElementById("minutes").textContent = checkMS(parseInt(mySeconds / 60));
}

function start(){
    document.getElementById("cards").addEventListener("click",() => {
        if(timer == null){
            timer = setInterval(time,1000)
        }
    })
}

function stop(){
    clearInterval(timer);
    timer = null;
}

function checkMS(num){
    return num>9?num:"0"+num
}