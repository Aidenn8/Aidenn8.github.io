// Handle visibility of sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const leaders = document.querySelectorAll('.leader');

    // Function to check if an element is in view
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Handle scroll visibility
    function handleScroll() {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });

        leaders.forEach((leader) => {
            if (isInViewport(leader)) {
                leader.classList.add('visible');
            }
        });
    }

    // Trigger scroll visibility on scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger visibility on load
});
