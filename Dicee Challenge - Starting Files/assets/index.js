

function play() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    var images = "images/dice" + randomNumber1 + ".png";
    var images2 = "images/dice" + randomNumber2 + ".png";

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", images);

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", images2);

    if (images > images2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
        document.querySelector("h3").innerHTML = "Click to roll again";
    } else if (images < images2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
        document.querySelector("h3").innerHTML = "Click to roll again";
    } else {
        document.querySelector("h1").innerHTML = "Draw";
        document.querySelector("h3").innerHTML = "Click to roll again";
    }

    document.createElemen

    return 0;
}