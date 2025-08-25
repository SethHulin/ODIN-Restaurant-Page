import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const homeButton = document.getElementById('home-button')
const menuButton = document.getElementById('menu-button')
const contactButton = document.getElementById('contact-button')
const activeSection = document.querySelector('.active');



loadHome();

homeButton.addEventListener('click' , ()=>{

    clearContent();
    setActive(homeButton);


    loadHome();
})

menuButton.addEventListener('click' , ()=>{


    clearContent();
    setActive(menuButton);


    loadMenu();
})

contactButton.addEventListener('click' , ()=>{
    clearContent();
    setActive(contactButton);

    loadContact();
})



function clearContent () {
    const content = document.getElementById('content');
    content.innerHTML = "";
}

function setActive (button) {
    const activeSection = document.querySelector('.active');
    if (activeSection) {
        activeSection.classList.remove('active');
    }
    button.classList.add('active');

}

