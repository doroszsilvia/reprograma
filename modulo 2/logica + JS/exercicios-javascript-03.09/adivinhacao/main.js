const goal = getRandomInt(999);
const form = document.querySelector('.game');
const input = document.querySelector('.game input');
let tries = 0;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const guess = input.value;

    /* goal é do tipo string, por isso se utilizar o === irá retornar false */
    if (guess == goal) {
        form.style.display = "none";
        const result = document.querySelector(".result");
        const resultParagraph = document.querySelector(".result p");

        result.style.display = "flex";
        resultParagraph.innerHTML = `${goal} <br> número de tentativas: ${tries}`;

    } 
    else if (guess > goal) {

        const information = document.querySelector(".game p");
        information.style.opacity = 1;
        information.innerHTML = "Oops, o número correto é menor do que esse...";
        setTimeout( function() {
            information.style.opacity = 0;
        }, 1000);
        tries++;

    } 
    else if (guess < goal) {

        const information = document.querySelector(".game p");
        information.style.opacity = 1;
        information.innerHTML = "Oops, o número correto é maior do que esse...";
        setTimeout( function() {
            information.style.opacity = 0;
        }, 1000);
        tries++;
        
    }

});