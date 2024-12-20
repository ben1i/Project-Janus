"use strict";

const container = document.querySelector('.header__page');
const centralDiv = document.querySelector('.header__titleDiv');
const numImages = 30;
const speedMultiplier = 2; // Facteur pour augmenter la vitesse
const images = [];

// URLs des images
const imageUrls = [
  'assets/images/donoguys/1.png', 'assets/images/donoguys/2.png', 'assets/images/donoguys/3.png', 'assets/images/donoguys/4.png', 'assets/images/donoguys/5.png', 'assets/images/donoguys/6.png', 'assets/images/donoguys/7.png', 'assets/images/donoguys/8.png', 'assets/images/donoguys/9.png', 'assets/images/donoguys/10.png', 'assets/images/donoguys/11.png', 'assets/images/donoguys/12.png', 'assets/images/donoguys/13.png', 'assets/images/donoguys/14.png', 'assets/images/donoguys/15.png', 'assets/images/donoguys/16.png', 'assets/images/donoguys/17.png', 'assets/images/donoguys/18.png', 'assets/images/donoguys/19.png', 'assets/images/donoguys/20.png', 'assets/images/donoguys/21.png', 'assets/images/donoguys/22.png', 'assets/images/donoguys/23.png', 'assets/images/donoguys/24.png', 'assets/images/donoguys/25.png', 'assets/images/donoguys/26.png', 'assets/images/donoguys/27.png', 'assets/images/donoguys/28.png', 'assets/images/donoguys/29.png', 'assets/images/donoguys/30.png'
];

// Initialisation des images
for (let i = 0; i < numImages; i++) {
  const img = document.createElement('div');
  img.classList.add('image');
  img.style.backgroundImage = `url(${imageUrls[i % imageUrls.length]})`;
  img.style.width = `${Math.random() * 100 + 100}px`; // Taille aléatoire
  img.style.height = img.style.width;
  container.appendChild(img);

  const width = img.offsetWidth;
  const height = img.offsetHeight;

  let x, y;
  let centralDivRect = centralDiv.getBoundingClientRect();
  let containerRect = container.getBoundingClientRect();

  // Positionner les images sans chevaucher `.header__titleDiv` et à l'intérieur de `.header__page`
  do {
    x = Math.random() * (containerRect.width - width);
    y = Math.random() * (containerRect.height - height);
  } while (
    x < centralDivRect.right - containerRect.left &&
    x + width > centralDivRect.left - containerRect.left &&
    y < centralDivRect.bottom - containerRect.top &&
    y + height > centralDivRect.top - containerRect.top
  );

  images.push({
    element: img,
    x: x,
    y: y,
    dx: (Math.random() * 2 + 1) * speedMultiplier,
    dy: (Math.random() * 2 + 1) * speedMultiplier,
    width: width,
    height: height,
  });
}

// Animation
function animate() {
  const updatedCentralDivRect = centralDiv.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  images.forEach((img) => {
    img.x += img.dx;
    img.y += img.dy;

    // Rebond sur les bords de `.header__page`
    if (img.x <= 0 || img.x + img.width >= containerRect.width) {
      img.dx *= -1;
      img.x = Math.max(0, Math.min(img.x, containerRect.width - img.width));
    }
    if (img.y <= 0 || img.y + img.height >= containerRect.height) {
      img.dy *= -1;
      img.y = Math.max(0, Math.min(img.y, containerRect.height - img.height));
    }

    // Rebond sur `.header__titleDiv`
    if (
      img.x + containerRect.left < updatedCentralDivRect.right &&
      img.x + img.width + containerRect.left > updatedCentralDivRect.left &&
      img.y + containerRect.top < updatedCentralDivRect.bottom &&
      img.y + img.height + containerRect.top > updatedCentralDivRect.top
    ) {
      if (
        img.x + img.width - img.dx + containerRect.left <= updatedCentralDivRect.left ||
        img.x - img.dx + containerRect.left >= updatedCentralDivRect.right
      ) {
        img.dx *= -1;
      }
      if (
        img.y + img.height - img.dy + containerRect.top <= updatedCentralDivRect.top ||
        img.y - img.dy + containerRect.top >= updatedCentralDivRect.bottom
      ) {
        img.dy *= -1;
      }
    }

    img.element.style.transform = `translate(${img.x}px, ${img.y}px)`;
  });

  requestAnimationFrame(animate);
}

animate();