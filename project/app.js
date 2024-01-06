var first = document.getElementById("first-money");
var second = document.getElementById("second-money");
var firstTik = document.getElementById("first-tik");
var secondTik = document.getElementById("second-tik");
var firstİmg = document.getElementById("first-img");
var secondİmg = document.getElementById("second-img"); 

firstTik.onclick = function() {
    if(firstİmg.style.opacity == 1){
        firstİmg.style.opacity = 0;
        first.style.border = "2px solid #D9D2FF";
    }else if(firstİmg.style.opacity == 0) {
        firstİmg.style.opacity = 1;
        first.style.border = "3px solid #9665FF";
    }
    secondİmg.style.opacity = 0;
    second.style.border = "2px solid #D9D2FF";

}
secondTik.onclick = function () {
    if(secondİmg.style.opacity == 1){
        secondİmg.style.opacity == 0;
        second.style.border = "2px solid #D9D2FF"
    }else if(secondİmg.style.opacity == 0) {
        secondİmg.style.opacity = 1;
        second.style.border = "3px solid #9665FF"
    }
    firstİmg.style.opacity = 0;
    first.style.border = "2px solid #D9D2FF";
}