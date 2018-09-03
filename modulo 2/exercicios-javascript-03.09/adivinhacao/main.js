const goal = getRandomInt(999);
console.log(goal);
const form = document.querySelector('.game');
const input = document.querySelector('.game input');
let tries = 0;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    tries++;
    
    const guess = input.value;

    if (guess == goal) {
        console.log('oi');
        form.style.display = "none";
        const result = document.querySelector(".result");
        const resultParagraph = document.querySelector(".result p");

        result.style.display = "flex";
        resultParagraph.innerHTML = `${goal}, número de tentativas: ${tries}`;

        } else if (guess > goal) {
        const information = document.querySelector(".game p");
        information.innerHTML = "Oops, o número correto é menor do que esse...";
    } else if (guess < goal) {
        const information = document.querySelector(".game p");
        information.innerHTML = "Oops, o número correto é maior do que esse...";
    }

});