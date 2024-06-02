$('.menu-txt').on('click', function() {
    $('.menu-txt').removeClass('active');
    
    $(this).addClass('active');
    
    var targetClass = '';
    if ($(this).hasClass('menuhome')) {
        targetClass = 'home-top';
    } else if ($(this).hasClass('menuproject')) {
        targetClass = 'project';
    } else if ($(this).hasClass('menucarrers')) {
        targetClass = 'carrers';
    } else if ($(this).hasClass('menuaboutme')) {
        targetClass = 'aboutme';
    }
    
    $('html, body').animate({
        scrollTop: $('.' + targetClass).offset().top
    }, 800);
  });