function wrong(){
    window.location="rong9.html"
}
function right(){

    window.location="lick9.html"
    Score3 = localStorage.getItem("score");
    Score3 =  Number(Score3) + 1;
    localStorage.setItem("score",Score3);
}
function finish(){
    window.location="index10.html"
}

