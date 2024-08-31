$('.go-to-top').on('click',(e)=>{
    window.scrollTo({top:0, behavior:"smooth"})
})


// main-home-top
const cursorClasses = {
    'home-box-4': 'cursor-beaurit',
    'home-box-6': 'cursor-marshall',
    'home-box-15': 'cursor-tamburins',
    'home-box-18': 'cursor-everparking'
  };
  
  const topWraps = document.querySelectorAll('.home-top-box');
  const cursors = document.querySelectorAll('.home-cursor');
  
  topWraps.forEach(wrap => {
    const wrapClass = wrap.classList[1];
    const cursorClass = cursorClasses[wrapClass];
    const cursor = document.querySelector(`.${cursorClass}`);
  
    wrap.addEventListener('mouseenter', () => {
      cursor.style.display = 'block';
    });
  
    wrap.addEventListener('mouseleave', () => {
      cursor.style.display = 'none';
    });
  
    wrap.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
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
                document.querySelector('.project-no').innerText = `( ${partClass[4]} / 4 )`;
                document.querySelector(`.project-bg-title.${partClass}`).classList.add('active');
            }
        });
    }, observerOptions);

    const projectDetails = document.querySelectorAll('.project-detail');
    projectDetails.forEach(detail => {
        observer.observe(detail);
    });
});



    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.project-detail');
        let isPaused = false;
        
        function checkIfInView() {
            if (isPaused) return;

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const isInView = (rect.top >= window.innerHeight / 2 - rect.height / 2) &&
                                 (rect.bottom <= window.innerHeight / 2 + rect.height / 2);
                
                if (isInView) {
                    isPaused = true;
                    setTimeout(() => {
                        isPaused = false;
                    }, 1000);
                }
            });
        }

        window.addEventListener('scroll', () => {
            if (!isPaused) {
                checkIfInView();
            } else {
                window.scrollTo(0, window.pageYOffset);
            }
        });
    });




      
// SVG 경로를 가져옵니다
const path = document.getElementById('textPath');
const circlesGroup = document.getElementById('circles');
const pathLength = path.getTotalLength();

const numCircles = 17;
const circleRadius = 60;
const startDelay = 3000; // 애니메이션 시작 전의 딜레이 시간 (5초)

// 원을 먼저 추가하여 도형이 보이도록 설정
for (let i = 0; i <= numCircles; i++) {
  const point = path.getPointAtLength((i / numCircles) * pathLength);
  
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", point.x);
  circle.setAttribute("cy", point.y);
  circle.setAttribute("r", circleRadius);
  
  // 초기 상태에서 원이 보이도록 설정
  circle.style.fill = "#fff";
  circle.style.stroke = "#000";
  circle.style.strokeWidth = "10px";
  circle.style.opacity = 1;
  circle.style.transition = "none"; // 초기 상태에서 애니메이션 없음
  
  // 원을 그룹에 추가
  circlesGroup.appendChild(circle);
}

// 5초 후에 원이 사라지도록 설정
setTimeout(() => {
  const circles = circlesGroup.querySelectorAll('circle');
  
  circles.forEach((circle, index) => {
    setTimeout(() => {
      // 원이 즉시 사라지도록 설정
      circle.style.display = "none";
    }, index * 100); // 각 원이 사라지는 간격 조절
  });
}, startDelay); // 5초 후에 사라지기 시작

  