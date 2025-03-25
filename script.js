document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;

                img.onload = () => {
                    img.classList.add('loaded');
                };

                observer.unobserve(img);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});