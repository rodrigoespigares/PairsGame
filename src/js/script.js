const numCards = 8;
let timerCard = null;
let cardShow = 0;

function moveArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function cards() {   
    reload();
    let array = aleatoryArray();
    let shufleArray = moveArray(array);
    for (let i = 0; i < numCards; i++) {
        let newImg = document.createElement("img");
        newImg.src="src/img/naipes.jpg"
        newImg.fotillo ="faceDown"
        newImg.classList.add("card",shufleArray.pop());
        newImg.addEventListener("click",rotate);
        if(timer==null){
            newImg.addEventListener("click",start);
        }
        document.getElementById("cards").appendChild(newImg);
    }
}
function aleatoryArray() {
    let salida = [];
    for (let i = 0; i < numCards/2; i++) {
        num = numberAleatory(numCards/2);
        if(!salida.includes(num)){
            salida.push(num);
            salida.push(num);
        }else{
            i--;
        }
    }
    return salida;
}
function numberAleatory(max) {
    return Math.floor(Math.random()*max);
}
function rotate(e) {
    if (cardShow<2) {
        if(e.target.classList.contains("1")){
            e.target.src = "src/img/bastos_1.jpg";
            e.target.fotillo = "faceUp";
            cardShow++;
        }else if(e.target.classList.contains("2")){
            e.target.src = "src/img/oros_1.jpg";
            e.target.fotillo = "faceUp";
            cardShow++;
        }else if(e.target.classList.contains("3")){
            e.target.src = "src/img/espadas_1.jpg";
            e.target.fotillo = "faceUp";
            cardShow++;
        }else if(e.target.classList.contains("0")){
            e.target.src = "src/img/copas_1.jpg";
            e.target.fotillo = "faceUp";
            cardShow++;
        }
        if (timerCard==null) {
            timerCard = setTimeout(volver,3000);
        }
    }
}
function volver() {
    let allCard = document.getElementsByClassName("card");
    isIqual();
    for (const card of allCard) {
        card.src = "src/img/naipes.jpg"
        card.fotillo ="faceDown"
    }
    timerCard = null;
    
}
function isIqual() {
    if (cardShow === 2) {
        let selectedCards = [];
        let cardsToRemove = [];
        let allCard = document.getElementsByClassName("card");
        for (const card of allCard) {
            if (card.fotillo !== "faceDown") {
                selectedCards.push(card.classList[1]);
                cardsToRemove.push(card);
            }
        }
        if (selectedCards.length === 2) {
            if (selectedCards[0] === selectedCards[1]) {
                for (const card of cardsToRemove) {
                    if (card.fotillo !== "faceDown") {
                        card.remove();
                        win();
                    }
                }
            }
        }
        cardShow = 0;
    }
}
function win() {
    let cardsElement = document.getElementById('cards');
    console.log(cardsElement.childNodes.length)
    if (cardsElement.childNodes.length === 0) {
        stop();
        createDiv();
    }
       
}
function createDiv() {
    let newDiv = document.createElement("div");
    let newX=document.createElement("button");
    let newImgX=document.createElement("img");
    newX.id="close";
    newImgX.src="src/img/close.png";
    newX.appendChild(newImgX);
    newX.addEventListener("click",closeAlert);
    newDiv.id="alert";
    newDiv.textContent="¡¡HAS GANADO!! PULSA X PARA VOLVER A JUGAR";
    newDiv.appendChild(newX);
    document.body.appendChild(newDiv);
}
function closeAlert(){
    let div = document.getElementById("alert");
    document.body.removeChild(div);
    cards()
}