let gameEl = document.getElementById("home-el")

let score = 0
function one(){
    score += 1;
    gameEl.innerHTML = score
}
function two(){
    score += 2;
    gameEl.innerHTML = score
}
function three(){
    score += 3;
    gameEl.innerHTML = score
}

let gameEll = document.getElementById("guest-el")

let scone = 0
function once(){
    scone += 1;
    gameEll.innerHTML = scone
}
function too(){
    scone += 2;
    gameEll.innerHTML = scone
}
function thre(){
    scone += 3;
    gameEll.innerHTML = scone
}

score = 0
scone = 0
if (score > scone){
    document.getElementById("demo").innerHTML = "Leader: HOME";
}
else if ( score === scone ) {
    document.getElementById("demo").innerHTML = "Leader: TIE";
}
else {
    document.getElementById("demo").innerHTML = "Leader: GUEST";
}