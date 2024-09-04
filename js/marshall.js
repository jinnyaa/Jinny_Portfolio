document.addEventListener('DOMContentLoaded', function() {
    const goToTopImg = document.querySelector('.go-to-top img');
    const titleSection = document.querySelector('.title');

    window.addEventListener('scroll', function() {
        const titleRect = titleSection.getBoundingClientRect();
        const titleInView = titleRect.top <= window.innerHeight && titleRect.bottom >= 0;

        if (titleInView) {
            goToTopImg.style.filter = 'invert(100%)'; 
        } else {
            goToTopImg.style.filter = 'invert(0%)'; 
        }
    });
});
