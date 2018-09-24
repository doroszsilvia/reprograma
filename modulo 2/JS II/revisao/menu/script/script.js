addEventListener('scroll', function(event) {
    const header = document.querySelector('header h1');

    if (pageYOffset > 620) {
    header.style.backgroundPosition = 'left -1000px';
    header.style.height = '90px';
    }
    else {
        header.style.backgroundPosition = 'left -300px';
        header.style.height = '300px';
    }
    
});