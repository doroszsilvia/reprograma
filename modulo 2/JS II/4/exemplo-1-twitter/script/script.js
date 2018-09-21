const tweetarButton = document.querySelector('.tweet-composer__button');
const timeline = document.querySelector('.tweets-timeline');
const tweetInput = document.getElementById('tweetComposerInput');
const counter = document.getElementById('tweetComposerCounter');

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

    const date = new Date();
    const month = date.toLocaleString('pt-br', 
        { month: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit'}
    );

    tweetHeader.innerHTML = `
        <span class="tweets-timeline__name">Mariana</span>
        <span class="tweets-timeline__username">@marianazangrossi</span>
        <span class="tweets-timeline__date">${date.getDate()} de ${month}</span>
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
    ,
    

    tweetInput.value = '';

    const tweetDelete = document.querySelector('.tweets-timeline__delete-button');
    tweetDelete.addEventListener('click', function() {
        // const tweetDeleted = this.closest('.tweets-timeline__box');
        // timeline.removeChild(tweetDeleted);
        tweet.remove();
    });

});

tweetInput.addEventListener('keyup', function() {
    const maxLength = 280;
    tweetarButton.disabled = false;

    // if (this.value.length > maxLength ) {
    //     tweetarButton.disabled = true;
    //     counter.style.color = 'red'
    //     this.value = this.value.substring(0, maxLength);
    //     return false;
    // }

    counter.innerHTML = maxLength - this.value.length;

    if (counter.textContent <= 15 && counter.textContent >= 0) {
        counter.style.color = 'orange';
        tweetarButton.disabled = false;
    }
    else if (counter.textContent < 0) {
        counter.style.color = 'red';
        tweetarButton.disabled = true;
    }
    else {
        counter.style.color = 'white';
    }
});