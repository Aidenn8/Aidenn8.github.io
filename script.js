// Add any JavaScript if needed, for animations or interactive features
// Example: smooth scroll for CTA button

document.querySelector('.cta').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});
