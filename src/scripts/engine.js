const emojis = [
    "🎱",
    "🎱",
    "👩‍💻",
    "👩‍💻",
    "🤡",
    "🤡",
    "👺",
    "👺",
    "☠️",
    "☠️",
    "👽",
    "👽",
    "🐺",
    "🐺",
    "🦇",
    "🦇",
];
let openCards = []

//Pra cada elemento ele vai colocar o peso de (2 ou -1) quem tiver -1 vai pra trás e quem tiver 2 vai pra frente.
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1)

for (let i = 0; i < emojis.length; i++) {
    //Criação de uma caixa dinamicamente
    let box = document.createElement("div");
    //Adiciona a classe criada (elemento carta)
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    //Pendurar a caixa
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }

    console.log(openCards);
}

function checkMatch(){
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
    else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if (document.querySelectorAll(".boxMatch").length == emojis.length){
        alert("Você venceu!")
    } {
        
    }
}