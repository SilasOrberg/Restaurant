import {loadFront} from './pageload.js';
import {loadMenuPage} from './menu.js';
import {loadContactPage} from './contact.js';

loadFront();

// Adding eventlistener to 'menu' button in the navbar
document.getElementById('menu-tab').addEventListener('click', loadMenuPage)

// Adding eventlistener to 'menu' button in the navbar
document.getElementById('home-tab').addEventListener('click', loadFront)

// Adding eventlistener to 'contact' button in the navbar
document.getElementById('contact-tab').addEventListener('click', loadContactPage)