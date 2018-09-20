const tweetarButton = document.querySelector('.tweet-composer__button');
const timeline = document.querySelector('.tweets-timeline');
const tweetInput = document.getElementById('tweetComposerInput');
// constantes relacionadas a data:
const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const date = new Date();

tweetarButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (tweetInput.value === undefined 
        || tweetInput.value === null 
        || tweetInput.value.length === 0 
        || tweetInput.value === ' ') {
        return false;
    }

    const tweet = document.createElement('div');
    tweet.className = 'tweets-timeline__box';

    const tweetHeader = document.createElement('div');
    tweetHeader.className = 'tweets-timeline__header';
    const tweetDate = `${date.getDate()} de ${months[ date.getMonth() ]}`;
    tweetHeader.innerHTML = `
        <span class="tweets-timeline__name">Mariana</span>
        <span class="tweets-timeline__username">@marianazangrossi</span>
        <span class="tweets-timeline__date">${tweetDate}</span>
    `;

    const tweetText = document.createElement('p');
    tweetText.classList.add('tweets-timeline__tweet');
    tweetText.innerHTML = tweetInput.value;

    const tweetFooter = document.createElement('div');
    tweetFooter.classList.add('tweets-timeline__footer');
    tweetFooter.innerHTML = `
        <button class="tweets-timeline__delete-button">Excluir</button>
    `;
    
    tweet.appendChild(tweetHeader);
    tweet.appendChild(tweetText);
    tweet.appendChild(tweetFooter);

    timeline.insertBefore(tweet, timeline.children[0]);

    tweetInput.value = '';

    const tweetDelete = document.querySelector('.tweets-timeline__delete-button');
    tweetDelete.addEventListener('click', function() {
        // const tweetDeleted = this.closest('.tweets-timeline__box');
        // timeline.removeChild(tweetDeleted);
        tweet.remove();
    });

});

tweetInput.addEventListener('keyup', function(event) {
    const counter = document.getElementById('tweetComposerCounter');

    if (tweetInput.value.length > 280 ) {
        tweetInput.value = tweetInput.value.substring(0, 280);
        return false;
    }
    
    counter.innerHTML = (280 - tweetInput.value.length);

    if (counter.textContent <= 15) counter.style.color = 'red';
    else counter.style.color = 'white';

});