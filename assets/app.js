"use strict";

/* Code des rebondissements générés par ChatGPT*/
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
/* Fin du code des rebondissements */


/* Code amélioré par corrigé par ChatGPT */
const nav = document.querySelector('.header__nav');
const hoverArea = document.createElement('div');

hoverArea.classList.add('header__hover-area');
document.body.appendChild(hoverArea);

hoverArea.addEventListener('mouseenter', function() {
  nav.classList.add('active');
})

nav.addEventListener('mouseleave', function() {
  nav.classList.remove('active');
})
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