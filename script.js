// Intersection Observer to detect when elements are in view
document.addEventListener("DOMContentLoaded", function() {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);  // Unobserve after the section comes into view
            }
        });
    }, {
        threshold: 0.5  // Trigger when 50% of the section is visible
    });

    // Observe all sections that should have the scroll-triggered animation
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        observer.observe(section);
    });
});
