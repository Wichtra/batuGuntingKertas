let player;

document.querySelector(".batu").addEventListener("click",()=>{
    player = 0;
    timer()
});
document.querySelector(".gunting").addEventListener("click",()=>{
    player = 1;
    timer()
});
document.querySelector(".kertas").addEventListener("click",()=>{
    player = 2;
    timer()
});

function computer() {
    const listGame = ["batu","gunting","kertas"];
    const i = Math.floor(Math.random() * (2-0 + 1) + 0);
    document.querySelector("img.cpu").setAttribute("src",`./images/${listGame[i]}.jpg`);
    setTimeout(()=>{
        rules(listGame[i],listGame[player]);
    },150);
}

function rules(comp,ply) {
    if (comp == "batu" && ply == "kertas") {
        alert("kamu menang")
    }
    else if (comp == "gunting" && ply == "batu") {
        alert("kamu menang")
    }
    else if (comp == "kertas" && ply == "gunting") {
        alert("kamu menang")
    }
    else if (comp == "gunting" && ply == "kertas") {
        alert("kamu kalah")
    }
    else if (comp == "batu" && ply == "gunting") {
        alert("kamu kalah")
    }
    else if (comp == "kertas" && ply == "batu") {
        alert("kamu kalah")
    }
    else if(comp == ply){
        alert("seri")
    }
    else{
        alert("maaf kesalahan sistem");
    }
}

function timer(){
    const listGame = ["batu","gunting","kertas"];
    var sec = new Date().getSeconds();
    let end = sec + 1;
    let i = 0;
    var timer = setInterval(function(){
        var sec1 = new Date().getSeconds();
        document.querySelector("img.cpu").setAttribute("src",`./images/${listGame[i]}.jpg`);
        i++
        if (sec1 > end) {
            clearInterval(timer);
            computer();
        }else if(i >2){
            i = 0;
        }
    }, 100);
}

