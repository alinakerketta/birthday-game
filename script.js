function checkAnswer() {

    let answer = document.getElementById("answer").value.toLowerCase();

    let message = document.getElementById("message");

    // Change this answer to anything you want
    if(answer === "pink") {

        message.innerHTML = "🎉 Correct! Unlocking surprise...";
        message.style.color = "green";

        document.getElementById("birthdayMusic").play();

        document.getElementById("surpriseBox").style.display = "block";

        document.getElementById("surpriseBox").style.display = "block";

        launchConfetti();

    } else {

        message.innerHTML = "❌ Wrong answer. Try again!";
        message.style.color = "red";
    }
}

function showFinalMessage() {

    document.getElementById("finalMessage").style.display = "block";
}

function playMusic() {

    let music = document.getElementById("birthdayMusic");

    music.play();
}

function launchConfetti() {

    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}

let text = "You are the best gift in this world 💖";

let index = 0;

function typeText() {

    if(index < text.length) {

        document.getElementById("typingText").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 80);
    }
}

typeText();

let images = [
    "photo4.jpeg",
    "photo5.jpeg",
    "photo6.jpeg",
    "photo7.jpeg",
    "photo8.jpeg"
];

let current = 0;

setInterval(function(){

    current++;

    if(current >= images.length) {
        current = 0;
    }

    document.getElementById("slideshow").src = images[current];

}, 2000);

setInterval(function() {

    confetti({
        particleCount: 80,
        spread: 70
    });

}, 3000);