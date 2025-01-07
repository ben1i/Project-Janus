"use strict";

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const emotes = ['./assets/images/emotes/aga-4x.gif', './assets/images/emotes/AROUND-4x.gif', './assets/images/emotes/Awkward-4x.gif', './assets/images/emotes/AWOOGA-4x.gif', './assets/images/emotes/baskin-4x.png', './assets/images/emotes/bye-4x.gif', './assets/images/emotes/classic-4x.gif', './assets/images/emotes/Dogsled-4x.png', './assets/images/emotes/Gooning-4x.png', './assets/images/emotes/heyyyy-4x.gif', './assets/images/emotes/hi-4x.gif', './assets/images/emotes/HIM-4x.gif', './assets/images/emotes/mhm-4x.gif', './assets/images/emotes/mmmmm-4x.png', './assets/images/emotes/NOOOO-4x.gif', './assets/images/emotes/om-4x.gif', './assets/images/emotes/PAGGING-4x.gif', './assets/images/emotes/Streamer-4x.png', './assets/images/emotes/uuh-4x.gif', './assets/images/emotes/WHAT-4x.gif', './assets/images/emotes/Who-4x.gif', ];

const nav = document.querySelector('.header__nav');
const navExit = document.querySelector(".header__exit");
const burgerMenu = document.querySelector(".header__burgerMenu");

const criticNav = document.querySelector('.critic__nav');
const criticExit = document.querySelector('.critic__exit');
const criticBurgerMenu = document.querySelector('.critic__burgerMenu');

const donoguysAsides = document.querySelectorAll('.donoguys');

const socialsParagraphs = document.querySelectorAll('.socials__paragraph');
const socialsOutParagraphs = document.querySelectorAll('.socials__Outparagraph');

const footerCopyright = document.querySelector('.footer__copyright');

var date = new Date();
var year = date.getFullYear();

footerCopyright.textContent = "© Benjamin Brihaye " + year;

burgerMenu.addEventListener('click', function() {
    nav.classList.add('header__nav--active');
});

navExit.addEventListener('click', function() {
    nav.classList.remove('header__nav--active');
});


if (window.location.pathname === "/index.html") {

    if(window.matchMedia("(min-width: 1200px)").matches) {

        /*Retrait du burger menu pour la version desktop*/
        burgerMenu.classList.add('hidden');
        navExit.classList.add('hidden');

        /*Retrait des paragrahes en dessous de l'image pour la version desktop*/
        for (let i = 0; i < socialsParagraphs.length; i++) {
            socialsParagraphs[i].classList.remove('hidden');
        }

        for (let i = 0; i < socialsOutParagraphs.length; i++) {
            socialsOutParagraphs[i].classList.add('hidden');
        }

        /*Généré par ChatGPT : Animations des donoguys dans le header*/
        document.addEventListener('DOMContentLoaded', () => {
            const headerPage = document.querySelector('.header__page');
            const titleDiv = document.querySelector('.header__titleDiv');
            const imagesCount = 30;
            const imageSize = 150;
        
            // Set styles for the header__page
            headerPage.style.position = 'relative';
            headerPage.style.overflowX = 'hidden';
        
            // Array to store image objects
            const images = [];

            const randomNumber = getRandomIntInclusive(1, 10);
            
            if (randomNumber !== 10) {
                // Create 30 images and add them to the header__page
                for (let i = 1; i <= imagesCount; i++) {
                    const img = document.createElement('div');
                    img.style.position = 'absolute';
                    img.style.width = `${imageSize}px`;
                    img.style.height = `${imageSize}px`;
                    img.style.backgroundImage = `url(./assets/images/donoguys/${i}.png)`;
                    img.style.backgroundSize = 'cover';
                    img.style.backgroundPosition = 'center';
                    img.style.backgroundSize = 'contain';
                    img.style.backgroundRepeat = 'no-repeat';
            
                    // Random initial position and uniform velocity
                    let x, y;
                    const speed = 16; // Uniform speed
                    const angle = Math.random() * 2 * Math.PI; // Random direction
                    const dx = speed * Math.cos(angle);
                    const dy = speed * Math.sin(angle);
            
                    do {
                        x = Math.random() * (headerPage.clientWidth - imageSize);
                        y = Math.random() * (headerPage.clientHeight - imageSize);
                    } while (
                        x < titleDiv.offsetLeft + titleDiv.offsetWidth &&
                        x + imageSize > titleDiv.offsetLeft &&
                        y < titleDiv.offsetTop + titleDiv.offsetHeight &&
                        y + imageSize > titleDiv.offsetTop
                    );
            
                    img.style.left = `${x}px`;
                    img.style.top = `${y}px`;
            
                    images.push({ element: img, x, y, dx, dy });
                    headerPage.appendChild(img);
                }
            } else {
                for (let i = 1; i <= imagesCount; i++) {
                    const img = document.createElement('div');
                    img.style.position = 'absolute';
                    img.style.width = `${imageSize}px`;
                    img.style.height = `${imageSize}px`;
                    img.style.backgroundImage = `url(${emotes[i]})`;
                    img.style.backgroundSize = 'cover';
                    img.style.backgroundPosition = 'center';
                    img.style.backgroundSize = 'contain';
                    img.style.backgroundRepeat = 'no-repeat';
            
                    // Random initial position and uniform velocity
                    let x, y;
                    const speed = 16; // Uniform speed
                    const angle = Math.random() * 2 * Math.PI; // Random direction
                    const dx = speed * Math.cos(angle);
                    const dy = speed * Math.sin(angle);
            
                    do {
                        x = Math.random() * (headerPage.clientWidth - imageSize);
                        y = Math.random() * (headerPage.clientHeight - imageSize);
                    } while (
                        x < titleDiv.offsetLeft + titleDiv.offsetWidth &&
                        x + imageSize > titleDiv.offsetLeft &&
                        y < titleDiv.offsetTop + titleDiv.offsetHeight &&
                        y + imageSize > titleDiv.offsetTop
                    );
            
                    img.style.left = `${x}px`;
                    img.style.top = `${y}px`;
            
                    images.push({ element: img, x, y, dx, dy });
                    headerPage.appendChild(img);
                }
            }
        
            function animate() {
                const headerRect = headerPage.getBoundingClientRect();
                const titleRect = titleDiv.getBoundingClientRect();
        
                images.forEach(image => {
                    const { element, dx, dy } = image;
        
                    // Update position
                    image.x += dx;
                    image.y += dy;
        
                    // Collision detection with header__page
                    if (image.x <= 0) {
                        image.x = 1; // Prevent exact 0 to avoid shaking
                        image.dx *= -1;
                    } else if (image.x + imageSize >= headerRect.width) {
                        image.x = headerRect.width - imageSize - 1;
                        image.dx *= -1;
                    }
        
                    if (image.y <= 0) {
                        image.y = 1;
                        image.dy *= -1;
                    } else if (image.y + imageSize >= headerRect.height) {
                        image.y = headerRect.height - imageSize - 1;
                        image.dy *= -1;
                    }
        
                    // Collision detection with header__titleDiv
                    if (
                        image.x < titleRect.right - headerRect.left &&
                        image.x + imageSize > titleRect.left - headerRect.left &&
                        image.y < titleRect.bottom - headerRect.top &&
                        image.y + imageSize > titleRect.top - headerRect.top
                    ) {
                        if (image.x < titleRect.left - headerRect.left ||
                            image.x + imageSize > titleRect.right - headerRect.left) {
                            image.dx *= -1;
                        }
                        if (image.y < titleRect.top - headerRect.top ||
                            image.y + imageSize > titleRect.bottom - headerRect.top) {
                            image.dy *= -1;
                        }
                    }
        
                    // Apply position updates
                    element.style.left = `${image.x}px`;
                    element.style.top = `${image.y}px`;
                });
        
                requestAnimationFrame(animate);
            }
        
            animate();
        });


        /*Alternance des couleurs du bouton*/
        var idButton = document.querySelector('.header__button');
        var buttonSVGs = idButton.querySelectorAll('img');
        
        function alternateButtonColor() {
            let isBlue = true;
            setInterval(() => {
            idButton.style.backgroundColor = isBlue ? "#406CBF" : "#11BCF5";
            idButton.style.color = isBlue ? "#FFFFFF" : "#000000";
            buttonSVGs.forEach(svg => {
                svg.style.filter = isBlue ? "invert(0%)" : "invert(100%)";
            });
            isBlue = !isBlue;
            }, 1000);
        }
        
        alternateButtonColor();

        
        /*Corrigé par ChatGPT : Descente de la nav au passage de la souris*/
        const nav = document.querySelector('.header__nav');
        const hoverArea = document.createElement('div');

        hoverArea.classList.add('header__hover-area');
        document.body.appendChild(hoverArea);

        hoverArea.addEventListener('mouseenter', function() {
            nav.classList.add('header__nav--active');
        })

        nav.addEventListener('mouseleave', function() {
            nav.classList.remove('header__nav--active');
        })


        /*Modification du code de ChatGPT : Animations des donoguys dans les asides (gauche puis droite)*/
        document.addEventListener('DOMContentLoaded', () => {
            const headerPage = document.querySelector('.donoguys--left');
            const titleDiv = document.querySelector('main');
            const imagesCount = 30;
            const imageSize = 150;
            
            // Set styles for the header__page
            headerPage.style.position = 'relative';
            headerPage.style.overflowX = 'hidden';
            
            // Array to store image objects
            const images = [];
            
            // Create 30 images and add them to the header__page
            for (let i = 1; i <= imagesCount; i++) {
                const img = document.createElement('div');
                img.style.position = 'absolute';
                img.style.width = `${imageSize}px`;
                img.style.height = `${imageSize}px`;
                img.style.backgroundImage = `url(./assets/images/donoguys/${i}.png)`;
                img.style.backgroundSize = 'cover';
                img.style.backgroundPosition = 'center';
            
                // Random initial position and uniform velocity
                let x, y;
                const speed = 8; // Uniform speed
                const angle = Math.random() * 2 * Math.PI; // Random direction
                const dx = speed * Math.cos(angle);
                const dy = speed * Math.sin(angle);
            
                do {
                    x = Math.random() * (headerPage.clientWidth - imageSize);
                    y = Math.random() * (headerPage.clientHeight - imageSize);
                } while (
                    x < titleDiv.offsetLeft + titleDiv.offsetWidth &&
                    x + imageSize > titleDiv.offsetLeft &&
                    y < titleDiv.offsetTop + titleDiv.offsetHeight &&
                    y + imageSize > titleDiv.offsetTop
                );
            
                img.style.left = `${x}px`;
                img.style.top = `${y}px`;
            
                images.push({ element: img, x, y, dx, dy });
                headerPage.appendChild(img);
            }
            
            function animate() {
                const headerRect = headerPage.getBoundingClientRect();
                const titleRect = titleDiv.getBoundingClientRect();
            
                images.forEach(image => {
                    const { element, dx, dy } = image;
            
                    // Update position
                    image.x += dx;
                    image.y += dy;
            
                    // Collision detection with header__page
                    if (image.x <= 0) {
                        image.x = 1; // Prevent exact 0 to avoid shaking
                        image.dx *= -1;
                    } else if (image.x + imageSize >= headerRect.width) {
                        image.x = headerRect.width - imageSize - 1;
                        image.dx *= -1;
                    }
            
                    if (image.y <= 0) {
                        image.y = 1;
                        image.dy *= -1;
                    } else if (image.y + imageSize >= headerRect.height) {
                        image.y = headerRect.height - imageSize - 1;
                        image.dy *= -1;
                    }
            
                    // Collision detection with header__titleDiv
                    if (
                        image.x < titleRect.right - headerRect.left &&
                        image.x + imageSize > titleRect.left - headerRect.left &&
                        image.y < titleRect.bottom - headerRect.top &&
                        image.y + imageSize > titleRect.top - headerRect.top
                    ) {
                        if (image.x < titleRect.left - headerRect.left ||
                            image.x + imageSize > titleRect.right - headerRect.left) {
                            image.dx *= -1;
                        }
                        if (image.y < titleRect.top - headerRect.top ||
                            image.y + imageSize > titleRect.bottom - headerRect.top) {
                            image.dy *= -1;
                        }
                    }
            
                    // Apply position updates
                    element.style.left = `${image.x}px`;
                    element.style.top = `${image.y}px`;
                });
            
                requestAnimationFrame(animate);
            }
            
            animate();
        });
        
        
            
        document.addEventListener('DOMContentLoaded', () => {
        const headerPage = document.querySelector('.donoguys--right');
        const titleDiv = document.querySelector('main');
        const imagesCount = 30;
        const imageSize = 150;
        
        // Set styles for the header__page
        headerPage.style.position = 'relative';
        headerPage.style.overflowX = 'hidden';
        
        // Array to store image objects
        const images = [];
        
        // Create 30 images and add them to the header__page
        for (let i = 1; i <= imagesCount; i++) {
            const img = document.createElement('div');
            img.style.position = 'absolute';
            img.style.width = `${imageSize}px`;
            img.style.height = `${imageSize}px`;
            img.style.backgroundImage = `url(./assets/images/donoguys/${i}.png)`;
            img.style.backgroundSize = 'cover';
            img.style.backgroundPosition = 'center';
        
            // Random initial position and uniform velocity
            let x, y;
            const speed = 8; // Uniform speed
            const angle = Math.random() * 2 * Math.PI; // Random direction
            const dx = speed * Math.cos(angle);
            const dy = speed * Math.sin(angle);
        
            do {
                x = Math.random() * (headerPage.clientWidth - imageSize);
                y = Math.random() * (headerPage.clientHeight - imageSize);
            } while (
                x < titleDiv.offsetLeft + titleDiv.offsetWidth &&
                x + imageSize > titleDiv.offsetLeft &&
                y < titleDiv.offsetTop + titleDiv.offsetHeight &&
                y + imageSize > titleDiv.offsetTop
            );
        
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
        
            images.push({ element: img, x, y, dx, dy });
            headerPage.appendChild(img);
        }
        
        function animate() {
            const headerRect = headerPage.getBoundingClientRect();
            const titleRect = titleDiv.getBoundingClientRect();
        
            images.forEach(image => {
                const { element, dx, dy } = image;
        
                // Update position
                image.x += dx;
                image.y += dy;
        
                // Collision detection with header__page
                if (image.x <= 0) {
                    image.x = 1; // Prevent exact 0 to avoid shaking
                    image.dx *= -1;
                } else if (image.x + imageSize >= headerRect.width) {
                    image.x = headerRect.width - imageSize - 1;
                    image.dx *= -1;
                }
        
                if (image.y <= 0) {
                    image.y = 1;
                    image.dy *= -1;
                } else if (image.y + imageSize >= headerRect.height) {
                    image.y = headerRect.height - imageSize - 1;
                    image.dy *= -1;
                }
        
                // Collision detection with header__titleDiv
                if (
                    image.x < titleRect.right - headerRect.left &&
                    image.x + imageSize > titleRect.left - headerRect.left &&
                    image.y < titleRect.bottom - headerRect.top &&
                    image.y + imageSize > titleRect.top - headerRect.top
                ) {
                    if (image.x < titleRect.left - headerRect.left ||
                        image.x + imageSize > titleRect.right - headerRect.left) {
                        image.dx *= -1;
                    }
                    if (image.y < titleRect.top - headerRect.top ||
                        image.y + imageSize > titleRect.bottom - headerRect.top) {
                        image.dy *= -1;
                    }
                }
        
                // Apply position updates
                element.style.left = `${image.x}px`;
                element.style.top = `${image.y}px`;
            });
        
            requestAnimationFrame(animate);
        }
        
        animate();
        });
    }

    if (window.matchMedia("(max-width: 1200px)").matches) {

        burgerMenu.classList.remove('hidden');
        navExit.classList.remove('hidden');

        for (let i = 0; i < socialsParagraphs.length; i++) {
            socialsParagraphs[i].classList.add('hidden');
        }

        for (let i = 0; i < socialsOutParagraphs.length; i++) {
            socialsOutParagraphs[i].classList.remove('hidden');
        }

        document.addEventListener('DOMContentLoaded', () => {
            const headerPage = document.querySelector('.header__page');
            const titleDiv = document.querySelector('.header__titleDiv');
            const imagesCount = 15;
            const imageSize = 100;
        
            // Set styles for the header__page
            headerPage.style.position = 'relative';
            headerPage.style.overflowX = 'hidden';
        
            // Array to store image objects
            const images = [];
        
            // Create 30 images and add them to the header__page
            for (let i = 1; i <= imagesCount; i++) {
                const img = document.createElement('div');
                img.style.position = 'absolute';
                img.style.width = `${imageSize}px`;
                img.style.height = `${imageSize}px`;
                img.style.backgroundImage = `url(./assets/images/donoguys/${i}.png)`;
                img.style.backgroundSize = 'cover';
                img.style.backgroundPosition = 'center';
        
                // Random initial position and uniform velocity
                let x, y;
                const speed = 8; // Uniform speed
                const angle = Math.random() * 2 * Math.PI; // Random direction
                const dx = speed * Math.cos(angle);
                const dy = speed * Math.sin(angle);
        
                do {
                    x = Math.random() * (headerPage.clientWidth - imageSize);
                    y = Math.random() * (headerPage.clientHeight - imageSize);
                } while (
                    x < titleDiv.offsetLeft + titleDiv.offsetWidth &&
                    x + imageSize > titleDiv.offsetLeft &&
                    y < titleDiv.offsetTop + titleDiv.offsetHeight &&
                    y + imageSize > titleDiv.offsetTop
                );
        
                img.style.left = `${x}px`;
                img.style.top = `${y}px`;
        
                images.push({ element: img, x, y, dx, dy });
                headerPage.appendChild(img);
            }
        
            function animate() {
                const headerRect = headerPage.getBoundingClientRect();
                const titleRect = titleDiv.getBoundingClientRect();
        
                images.forEach(image => {
                    const { element, dx, dy } = image;
        
                    // Update position
                    image.x += dx;
                    image.y += dy;
        
                    // Collision detection with header__page
                    if (image.x <= 0) {
                        image.x = 1; // Prevent exact 0 to avoid shaking
                        image.dx *= -1;
                    } else if (image.x + imageSize >= headerRect.width) {
                        image.x = headerRect.width - imageSize - 1;
                        image.dx *= -1;
                    }
        
                    if (image.y <= 0) {
                        image.y = 1;
                        image.dy *= -1;
                    } else if (image.y + imageSize >= headerRect.height) {
                        image.y = headerRect.height - imageSize - 1;
                        image.dy *= -1;
                    }
        
                    // Collision detection with header__titleDiv
                    if (
                        image.x < titleRect.right - headerRect.left &&
                        image.x + imageSize > titleRect.left - headerRect.left &&
                        image.y < titleRect.bottom - headerRect.top &&
                        image.y + imageSize > titleRect.top - headerRect.top
                    ) {
                        if (image.x < titleRect.left - headerRect.left ||
                            image.x + imageSize > titleRect.right - headerRect.left) {
                            image.dx *= -1;
                        }
                        if (image.y < titleRect.top - headerRect.top ||
                            image.y + imageSize > titleRect.bottom - headerRect.top) {
                            image.dy *= -1;
                        }
                    }
        
                    // Apply position updates
                    element.style.left = `${image.x}px`;
                    element.style.top = `${image.y}px`;
                });
        
                requestAnimationFrame(animate);
            }
        
            animate();
        });
        
        /* Fin du code de la nav */
        
        var idButton = document.querySelector('.header__button');
        var buttonSVGs = idButton.querySelectorAll('img');
        
        function alternateButtonColor() {
            let isBlue = true;
            setInterval(() => {
            idButton.style.backgroundColor = isBlue ? "#406CBF" : "#11BCF5";
            idButton.style.color = isBlue ? "#FFFFFF" : "#000000";
            buttonSVGs.forEach(svg => {
                svg.style.filter = isBlue ? "invert(0%)" : "invert(100%)";
            });
            isBlue = !isBlue;
            }, 1000);
        }
        
        alternateButtonColor();

        /* Code amélioré par corrigé par ChatGPT */
        
        document.addEventListener('DOMContentLoaded', () => {
            const headerPage = document.querySelector('.donoguys--left');
            const titleDiv = document.querySelector('main');
            const imagesCount = 30;
            const imageSize = 100;
            
            // Set styles for the header__page
            headerPage.style.position = 'relative';
            headerPage.style.overflowX = 'hidden';
            
            // Array to store image objects
            const images = [];
            
            // Create 30 images and add them to the header__page
            for (let i = 1; i <= imagesCount; i++) {
                const img = document.createElement('div');
                img.style.position = 'absolute';
                img.style.width = `${imageSize}px`;
                img.style.height = `${imageSize}px`;
                img.style.backgroundImage = `url(./assets/images/donoguys/${i}.png)`;
                img.style.backgroundSize = 'cover';
                img.style.backgroundPosition = 'center';
            
                // Random initial position and uniform velocity
                let x, y;
                const speed = 8; // Uniform speed
                const angle = Math.random() * 2 * Math.PI; // Random direction
                const dx = speed * Math.cos(angle);
                const dy = speed * Math.sin(angle);
            
                do {
                    x = Math.random() * (headerPage.clientWidth - imageSize);
                    y = Math.random() * (headerPage.clientHeight - imageSize);
                } while (
                    x < titleDiv.offsetLeft + titleDiv.offsetWidth &&
                    x + imageSize > titleDiv.offsetLeft &&
                    y < titleDiv.offsetTop + titleDiv.offsetHeight &&
                    y + imageSize > titleDiv.offsetTop
                );
            
                img.style.left = `${x}px`;
                img.style.top = `${y}px`;
            
                images.push({ element: img, x, y, dx, dy });
                headerPage.appendChild(img);
            }
            
            function animate() {
                const headerRect = headerPage.getBoundingClientRect();
                const titleRect = titleDiv.getBoundingClientRect();
            
                images.forEach(image => {
                    const { element, dx, dy } = image;
            
                    // Update position
                    image.x += dx;
                    image.y += dy;
            
                    // Collision detection with header__page
                    if (image.x <= 0) {
                        image.x = 1; // Prevent exact 0 to avoid shaking
                        image.dx *= -1;
                    } else if (image.x + imageSize >= headerRect.width) {
                        image.x = headerRect.width - imageSize - 1;
                        image.dx *= -1;
                    }
            
                    if (image.y <= 0) {
                        image.y = 1;
                        image.dy *= -1;
                    } else if (image.y + imageSize >= headerRect.height) {
                        image.y = headerRect.height - imageSize - 1;
                        image.dy *= -1;
                    }
            
                    // Collision detection with header__titleDiv
                    if (
                        image.x < titleRect.right - headerRect.left &&
                        image.x + imageSize > titleRect.left - headerRect.left &&
                        image.y < titleRect.bottom - headerRect.top &&
                        image.y + imageSize > titleRect.top - headerRect.top
                    ) {
                        if (image.x < titleRect.left - headerRect.left ||
                            image.x + imageSize > titleRect.right - headerRect.left) {
                            image.dx *= -1;
                        }
                        if (image.y < titleRect.top - headerRect.top ||
                            image.y + imageSize > titleRect.bottom - headerRect.top) {
                            image.dy *= -1;
                        }
                    }
            
                    // Apply position updates
                    element.style.left = `${image.x}px`;
                    element.style.top = `${image.y}px`;
                });
            
                requestAnimationFrame(animate);
            }
            
            animate();
        });
    }

    if (window.matchMedia("(min-width: 1400px)").matches) {
        for (let i = 0; i < donoguysAsides.length; i++) {
            donoguysAsides[i].classList.remove('hidden');
        }
    }

    if (window.matchMedia("(max-width: 1400px)").matches) {
        for (let i = 0; i < donoguysAsides.length; i++) {
            donoguysAsides[i].classList.add('hidden');
        }
    }
}

if (window.location.pathname === "/critic/index.html") {

    if(window.matchMedia("(min-width: 1200px)").matches) {

        burgerMenu.classList.add('hidden');
        navExit.classList.add('hidden');

        /*Corrigé par ChatGPT : Descente de la nav au passage de la souris*/
        const hoverArea = document.createElement('div');

        hoverArea.classList.add('header__hover-area');
        document.body.appendChild(hoverArea);

        hoverArea.addEventListener('mouseenter', function() {
            criticNav.classList.add('header__nav--active');
        })

        nav.addEventListener('mouseleave', function() {
            criticNav.classList.remove('header__nav--active');
        });
    }

    if (window.matchMedia("(max-width: 1200px)").matches) {

        burgerMenu.classList.remove('hidden');
        navExit.classList.remove('hidden');
    }
}