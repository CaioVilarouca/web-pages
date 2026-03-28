const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Remove mobile */
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/* / Remove mobile */

/* Services modal */
const modalViews = document.querySelectorAll('.services-modal'),
    modalBtns = document.querySelectorAll('.services-button'),
    modalClose = document.querySelectorAll('.services-modal-close ')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/* / Services modal */

/* Scroll */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } 
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/* / Scroll */

/* Background Header */
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } 
    else {
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);
/* / Background Header */

/* Show Scroll Top */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)
/* / Show Scroll Top */

/* Dark Light Theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedThemeIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedThemeIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/* / Dark Light Theme */