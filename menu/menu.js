/* -------------------------------------------------------------------------
Header Menu
------------------------------------------------------------------------- */

const navbarMenu = document.getElementById('navbar');
const burgerMenu = document.getElementById('burger');
const overlayMenu = document.getElementById('overlay');

// Toggle Menu Function
burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    navbarMenu.classList.toggle('active');
    overlayMenu.classList.toggle('active');
}

// Collapse SubMenu Function
navbarMenu.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
        e.preventDefault();
        const menuItemHasChildren = e.target.parentElement;

        // If menu-item-child is Expanded, then Collapse It
        if (menuItemHasChildren.classList.contains('active')) {
            collapseSubMenu();
        } else {
            // Collapse the Existing Expanded menu-item-child
            if (navbarMenu.querySelector('.menu-item-child.active')) {
                collapseSubMenu();
            }
            // Expanded the New menu-item-child
            menuItemHasChildren.classList.add('active');
            const subMenu = menuItemHasChildren.querySelector('.sub-menu');
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
    }
});

function collapseSubMenu() {
    navbarMenu.querySelector('.menu-item-child.active .sub-menu').removeAttribute('style');
    navbarMenu.querySelector('.menu-item-child.active').classList.remove('active');
}

(function() { // For using strict javascript : start
    "use strict"; 
// Fixed Resize Screen Function
window.addEventListener('resize', () => {
    if (this.innerWidth > 992) {
        // If navbarMenu is Open, then Close It
        if (navbarMenu.classList.contains('active')) {
            toggleMenu();
        }

        // If menu-item-child is Expanded, then Collapse It
        if (navbarMenu.querySelector('.menu-item-child.active')) {
            collapseSubMenu();
        }
    }
});
}); // For using strict javascript : end
// add class based on scroll position
let scrollpos = window.scrollY
const header = document.querySelector("header")
const header_height = "15" //set by pixels

const add_class_on_scroll = () => header.classList.add("fade-in")
const remove_class_on_scroll = () => header.classList.remove("fade-in")

window.addEventListener('scroll', function() { 
scrollpos = window.scrollY; 

if (scrollpos >= header_height) { add_class_on_scroll() }
else { remove_class_on_scroll() }

//console.log(scrollpos)
})

// End Header Menu