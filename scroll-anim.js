document.addEventListener("DOMContentLoaded", () => {
    const slowSections = document.querySelectorAll('.slow-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.08 });


    slowSections.forEach(section => observer.observe(section));
});
