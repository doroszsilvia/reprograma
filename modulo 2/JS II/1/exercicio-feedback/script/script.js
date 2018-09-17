const button = document.querySelector('.feedback__button');

button.addEventListener('click', function(event){
    event.preventDefault();

    const message = document.querySelector('#feedbackInputMessage').value;
    const testimonials = document.querySelector('.testimonials');

    const newReview = document.createElement('p');
    newReview.appendChild( document.createTextNode( message ) );

    testimonials.appendChild(newReview);
    testimonials.appendChild( document.createElement('hr') );

});