$('.go-to-top').on('click',(e)=>{
    window.scrollTo({top:0, behavior:"smooth"})
})

//메뉴 색상 변경
$(document).ready(function(){
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var homeTopPos = $('.home-top').offset().top;
        var homeTopHeight = $('.home-top').outerHeight();
        var header = $('header');
        var goToTopimg=$('.go-to-top img')
        
        if(scrollPos >= homeTopPos){
            header.css('color', '#fff');
            goToTopimg.css('filter','invert(100%)')
        } else {
            header.css('color', ''); 
            goToTopimg.css('filter','')
        }

        if (scrollPos < homeTopPos || scrollPos >= (homeTopPos + homeTopHeight * 0.9)) {
            header.css('color', '');
            goToTopimg.css('filter','')
        }
    });
});




// 메뉴이동
document.querySelectorAll('.menu-txt').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelectorAll('.menu-txt').forEach(li => {
            li.classList.remove('active');
        });

        if (item.classList.contains('menuhome')) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const sectionClass = item.classList[1].replace('menu', '');
            document.querySelector(`section.${sectionClass}`).scrollIntoView({
                behavior: 'smooth'
            });
        }

        item.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            document.querySelectorAll('.menu-txt').forEach(li => {
                li.classList.remove('active');
            });
            if (section.classList.contains('home-bottom')) {
                document.querySelector('.menu-txt.menuhome').classList.add('active');
            } else {
                document.querySelector(`.menu-txt.menu${section.className}`).classList.add('active');
            }
        }
    });
});

// typing effect
const typing = document.querySelector('.homebottom-txtbox-typing');

function typingOn(){
    window.addEventListener('scroll',()=>{
        if(window.innerHeight > typing.getBoundingClientRect().top){
            typing.classList.add('on');
        }
    })
}

typingOn();

// mouse-pointer
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
  
    $("#home-bottom-video-cursor").css('transform', 'translate(' + x + 'px, ' + y + 'px)');
  
    $('.home-bottom-video').eq(0).on('mouseover', function () {
      $('.inner_wrap').eq(0).addClass('on');
    });
    $('.home-bottom-video').eq(0).on('mouseleave', function () {
      $('.inner_wrap').eq(0).removeClass('on');
    });
  });

  

// project
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const partClass = entry.target.classList[1];
                document.querySelector('.project-bg-title.active')?.classList.remove('active');
                document.querySelector('.project-no').innerText = `( ${partClass[4]} / 3 )`;
                document.querySelector(`.project-bg-title.${partClass}`).classList.add('active');
            }
        });
    }, observerOptions);

    const projectDetails = document.querySelectorAll('.project-detail');
    projectDetails.forEach(detail => {
        observer.observe(detail);
    });
});



