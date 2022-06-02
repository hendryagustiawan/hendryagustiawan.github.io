const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio1 = document.getElementById("audioTrue");
const audio2 = document.getElementById("audioFalse");
let answer = 0;

function equation() {
    let num1 = Math.ceil(Math.random() * 10)
    let num2 = Math.ceil(Math.random() * 10)
    let answer1 = Math.ceil(Math.random() * 10)
    let answer2 = Math.ceil(Math.random() * 10)
    let allAnswer = []
    let switchAnswer = []

    answer = num1 + num2

    document.getElementById("num1").innerHTML = num1
    document.getElementById("num2").innerHTML = num2

    allAnswer = [answer, answer1, answer2]
        // console.log(allAnswer);

    for (let i = allAnswer.length; i > 0; i--) {
        let arr = allAnswer.splice(Math.floor(Math.random() * i), 1)[0]
            // console.log(arr);
        switchAnswer.push(arr)
            // console.log(switchAnswer)
    }
    // console.log(switchAnswer);

    option1.innerHTML = switchAnswer[0]
    option2.innerHTML = switchAnswer[1]
    option3.innerHTML = switchAnswer[2]
}

option1.addEventListener("click", function() {
    if (option1.innerHTML == answer) {
        audio1.play()
        equation()
    } else {
        audio2.play()
    }
});

option2.addEventListener("click", function() {
    if (option2.innerHTML == answer) {
        audio1.play()
        equation()
    } else {
        audio2.play()
    }
});

option3.addEventListener("click", function() {
    if (option3.innerHTML == answer) {
        audio1.play()
        equation()
    } else {
        audio2.play()
    }
});

equation()