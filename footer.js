document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.style.transform = 'scale(1.2)'; // Increase size slightly on hover
            icon.style.transition = 'transform 0.3s ease'; // Smooth scaling
        });

        icon.addEventListener('mouseout', function() {
            icon.style.transform = 'scale(1)'; // Reset size when hover ends
        });
    });
});
