var randomNumber1 = 0;
var randomNumber2 = 0;

function rollDice1(){
    randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImageSource);
}
function rollDice2(){
    randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
    var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImageSource2);

    result(randomNumber1 , randomNumber2);
}

function result(randomNumber1, randomNumber2) {
    if (randomNumber1 > randomNumber2) {
        console.log(randomNumber1);
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!!!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!!!  ";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
    }

}








