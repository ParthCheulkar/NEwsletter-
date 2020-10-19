
var n = Math.floor( Math.random() * 6) + 1;

var newimage1= "images/dice" + n + ".png";

var randomimage1=document.querySelectorAll("img")[0].setAttribute("src",newimage1);

var a = Math.floor(Math.random() * 6) + 1;
var newimage2="images/dice" + a + ".png";

var randomimage2=document.querySelectorAll("img")[1].setAttribute("src",newimage2);

if(n > a)
{
  document.querySelector("h1").innerHTML = "FIRST PLAYER WINS";

}
else if(n < a)
{
  document.querySelector("h1").innerHTML ="Second Player Wins";

}
else
{
  document.querySelector("h1").innerHTML ="DRAW";
}
