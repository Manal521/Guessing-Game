let randomNumber = Math.floor(Math.random() * 100) + 1;


const guessInput = document.getElementById("guessInput")
const checkButton = document.getElementById("checkButton")
const result = document.getElementById("result")
const restartButton = document.getElementById("restartButton")


checkButton.onclick = () => {
    const guess = Number(guessInput.value);




    if (guess < 1 || guess > 100) {
        result.textContent = "Enter numbet between 1 & 100.";
        result.style.color = "red";

    } else if (guess === randomNumber) {
        result.textContent = "You Won!";
        checkButton.disabled = true;
        result.style.color = "green";
        restartButton.style.display = "block";


    } else {
        result.textContent = guess < randomNumber ? "Too low! try again." : "Too hight! try again.";
        result.style.color = "purple";
    }


    guessInput.value = "";
    guessInput.focus();


};

restartButton.onclick = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = "";
    checkButton.disabled = false;
    restartButton.style.display = "none";
    guessInput.focus();
}