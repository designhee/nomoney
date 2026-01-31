//gnb hover 효과
$('.gnb_web li a').hover(
    function () {
        $(this).addClass('hovered');
    },
    function () {
        $(this).removeClass('hovered');
    }
);


//banner slide 효과
$(document).ready(function () {
    let currentIndex = 0;
    const $slides = $('.slide');
    const $dots = $('.dot');
    const totalSlides = $slides.length;
    let isAnimating = false;

    // 슬라이드 전환 함수
    function goToSlide(index) {
        if (isAnimating) return; // 애니메이션 중에는 클릭 방지

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        if (index === currentIndex) return;

        isAnimating = true;

        // 현재 슬라이드에 fade-out 클래스 추가
        $slides.eq(currentIndex).removeClass('active').addClass('fade-out');

        // 다음 슬라이드에 active 클래스 추가 (이미지가 겹치며 전환)
        $slides.eq(index).addClass('active').removeClass('fade-out');

        // 점 표시 업데이트
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');

        currentIndex = index;

        // 애니메이션 완료 후 잠금 해제
        setTimeout(function () {
            isAnimating = false;
        }, 800);
    }

    // 이전 버튼 클릭
    $('.arrow-prev').on('click', function () {
        goToSlide(currentIndex - 1);
    });

    // 다음 버튼 클릭
    $('.arrow-next').on('click', function () {
        goToSlide(currentIndex + 1);
    });

    // 점 클릭
    $dots.on('click', function () {
        const index = $(this).data('index');
        if (index !== currentIndex) {
            goToSlide(index);
        }
    });

    // 자동 슬라이드 (선택사항 - 5초마다)
    setInterval(function () {
        goToSlide(currentIndex + 1);
    }, 2300);
});


//자주 묻는 질문 아코디언 기능
document.querySelectorAll('.faq-accordion-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const wasActive = faqItem.classList.contains('faq-active');

        // 모든 아이템 닫기
        document.querySelectorAll('.faq-accordion-item').forEach(item => {
            item.classList.remove('faq-active');
        });

        // 클릭한 아이템이 닫혀있었다면 열기
        if (!wasActive) {
            faqItem.classList.add('faq-active');
        }
    });
});

// View more 버튼
document.querySelector('.faq-viewmore-btn').addEventListener('click', () => {
    alert('더 많은 FAQ를 준비 중입니다!');
});


// 미디어룸 스와이퍼 초기화
var swiper = new Swiper(".postSwiper", {
    slidesPerView: 4,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});