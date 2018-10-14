//create variable//
var blue = 0;
var green = 0;
var purple = 0;
var red = 0;
var random = 0;
var wins = 0;
var losses = 0;
var score = 0;
//computer generates random number//
function ranNum() {
    random = Math.floor(Math.random() * (102) + 19);
    console.log(random)
}
ranNum();

//if user input clicks equals to generated number alert prompts//
function game () {
    if (score === random) {
        wins++;
        score = 0;
        ranNum();
        crystals();
        alert("Congratulations");
//if user input does not equal generated number alert prompts//
    }
    else if (score > random) {
        losses++;
        score = 0;
        ranNum();
        crystals();
        alert("Boo! Try again");
    }
}
function crystals() {
    blue = Math.floor((Math.random() * 12) + 1);
    green = Math.floor((Math.random() * 12) + 1);
    purple = Math.floor((Math.random() * 12) + 1);
    red = Math.floor((Math.random() * 12) + 1);
    console.log(blue)
    console.log(green)
    console.log(purple)
    console.log(red)
}
crystals();

//tracker scores of the user input//
$(document).ready(function () {
    $("#blue").click(function () {
        score = blue + score;
        game();
        console.log(score)
    });
})

$(document).ready(function () {
    $("#green").click(function () {
        score = green + score;
        game();
        console.log(score)
    });
})

$(document).ready(function () {
    $("#purple").click(function () {
        score = purple + score;
        game();
        console.log(score)
    });
})

$(document).ready(function () {
    $("#red").click(function () {
        score = red + score;
        game();
        console.log(score)
    });
})

//this writes the HTML file
//Here I wanted to use .text .html to get the text to show on the site but it did not work//
var wins = $("#wins").html();




//THIS IS JUST PSEUDO CODE//
//give crystal a set value(number) and once clicked on that crystal points go up to match the random number genrated//


//keep track of total score at the bottom once crystal is clicked 

//if score goes over/does not match random number the player losses//

//if user score matches random number then player wins//

//track losses and wins to go up and down by 1//

//rest set game to new random number, keep track of wins/losses/ and reset total score at the bottom
