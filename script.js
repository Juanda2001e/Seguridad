document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        // Oculta todos los slides
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
        });
        // Muestra el slide actual
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Eventos para los botones
    nextBtn.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Inicia el slider automático
    startAutoSlide();

    // Muestra el primer slide al cargar la página
    showSlide(currentSlide);
});