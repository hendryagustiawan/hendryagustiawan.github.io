const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
let answer = 0;

function equation() {
    let num1 = Math.floor(Math.random() * 11)
    let num2 = Math.floor(Math.random() * 11)
    let answer1 = Math.floor(Math.random() * 11)
    let answer2 = Math.floor(Math.random() * 11)

    answer = num1 * num2

    document.getElementById("num1").innerHTML = num1
    document.getElementById("num2").innerHTML = num2

    option1.innerHTML = answer
    option2.innerHTML = answer1
    option3.innerHTML = answer2
}

option1.addEventListener("click", function() {
    if (option1.innerHTML == answer) {
        equation()
    } else {
        audio.play()
    }
});

option2.addEventListener("click", function() {
    if (option2.innerHTML == answer) {
        equation()
    } else {
        audio.play()
    }
});

option3.addEventListener("click", function() {
    if (option3.innerHTML == answer) {
        equation()
    } else {
        audio.play()
    }
});

equation()