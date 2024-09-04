
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state'); 

    document.querySelectorAll('.carrers-txt-wrap').forEach(function(txtWrap) {
        txtWrap.style.display = 'none';
    });

    document.querySelectorAll('.carrers-box').forEach(function(box) {
        box.style.filter = 'brightness(50%)'; 
    });


    if (state === '1') {
        document.querySelector('.carrers-txt-wrap-1').style.display = 'flex';
        document.querySelector('.carrers-box.carrers-box-1').style.filter = 'grayscale(0%)';
    } else if (state === '2') {
        document.querySelector('.carrers-txt-wrap-2').style.display = 'block';
        document.querySelector('.carrers-box.carrers-box-2').style.filter = 'grayscale(0%)';
    } else if (state === '3') {
        document.querySelector('.carrers-txt-wrap-3').style.display = 'block';
        document.querySelector('.carrers-box.carrers-box-3').style.filter = 'grayscale(0%)';
    }

    document.querySelectorAll('.carrers-box').forEach(function(box) {
        box.addEventListener('click', function() {
            document.querySelectorAll('.carrers-txt-wrap').forEach(function(txtWrap) {
                txtWrap.style.display = 'none';
            });
            document.querySelectorAll('.carrers-box').forEach(function(box) {
                box.style.filter = 'brightness(50%)'; 
            });

            if (box.classList.contains('carrers-box-1')) {
                document.querySelector('.carrers-txt-wrap-1').style.display = 'flex';
                box.style.filter = 'grayscale(0%)'; 
            } else if (box.classList.contains('carrers-box-2')) {
                document.querySelector('.carrers-txt-wrap-2').style.display = 'block';
                box.style.filter = 'grayscale(0%)'; 
            } else if (box.classList.contains('carrers-box-3')) {
                document.querySelector('.carrers-txt-wrap-3').style.display = 'block';
                box.style.filter = 'grayscale(0%)'; 
            }
        });
    });
});
