const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
let fontSize = 16;

increaseButton.addEventListener('click', function(event) {
    event.preventDefault();
    fontSize += 2;
    document.querySelector('.article').style.fontSize = `${fontSize}px`;
});

decreaseButton.addEventListener('click', function(event) {
    event.preventDefault();
    fontSize -= 2;
    document.querySelector('.article').style.fontSize = `${fontSize}px`;
});