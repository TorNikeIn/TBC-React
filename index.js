let currentIndex = 0;
let intervalId;

const startAutoPlay = (intervalTime) => {
    intervalId = setInterval(() => {
        nextSlide();
    }, intervalTime);
};

const stopAutoPlay = () => {
    clearInterval(intervalId);
};


startAutoPlay(3000);

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
    updateCarousel();
};

const prevSlide = () => {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
};

const updateCarousel = () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    const translateValue = -currentIndex * itemWidth;

    carouselInner.style.transform = `translateX(${translateValue}px)`;
};


const toggleAnswer = (question) => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.display === 'block';

    const allQuestions = document.querySelectorAll('.question');
    allQuestions.forEach((q) => {
        const ans = q.nextElementSibling;
        ans.style.display = 'none';
        q.querySelector('div').textContent = '▼';
    });

    answer.style.display = isOpen ? 'none' : 'block';
    question.querySelector('div').textContent = isOpen ? '▼' : '▲';
};