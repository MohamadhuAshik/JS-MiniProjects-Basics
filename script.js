 function converter() {
     let celcious = Number(document.getElementById("celsius").value);
     let farenheat = (celcious * (9 / 5) + 32);
     let result = document.getElementById("Fahrenheit");
     result.innerHTML = "Farenheat Value Is:"+farenheat+"F";
 }

function counter(){
let letter = document.getElementById("Letter").value;
let count = letter.length;
let click = document.getElementById("LetterCount");
  click.innerHTML="Your Letter Count Is:"+count;
}

function age(){
    let age = Number(document.getElementById("age").value)
    let Vote = age>=18 ? "Eligible For Vote" :  "Not Eligible For Vote";
    let answer = document.getElementById("Vote")
    answer.innerHTML=Vote
}






