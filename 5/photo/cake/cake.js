document.addEventListener('DOMContentLoaded', function() {
    // GSAP Animations for the hands
    gsap.to(".hand-1", { rotate: 50, repeat: -1, yoyo: true });
    gsap.to(".hand-2", { rotate: 130, repeat: -1, yoyo: true });
});
