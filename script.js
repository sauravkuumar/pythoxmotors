// --- Mobile Menu Toggle ---
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// --- Dropdown Menu (Mobile) ---
const productDropdown = document.getElementById('productDropdown');
productDropdown.addEventListener('click', (event) => {
    if (window.innerWidth <= 992) {
        event.preventDefault();
        productDropdown.classList.toggle('active');
    }
});

// --- Scroll Animations ---
const scrollElements = document.querySelectorAll('.scroll-fade');

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('active');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Initial check on page load
window.addEventListener('load', () => {
    handleScrollAnimation();
});