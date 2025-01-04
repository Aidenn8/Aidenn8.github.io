// JavaScript to handle scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    // Function to check if an element is in view
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top <= window.innerHeight && rect.bottom >= 0);
    }

    // Function to add 'visible' class when section comes into view
    function handleScroll() {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    // Trigger on scroll and when the page is loaded
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Also trigger on initial load
});
