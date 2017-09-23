// Gyroscope parallax effect for Rub's pictures
// --------------------------------------------

// Import Parallax.js
const Parallax = require('../node_modules/parallax-js/dist/parallax.js');

const scene = document.querySelectorAll('.js-parallax');

/**
 * Draw responsive Rub's pictures onto canvas
 * @param  {string} canvasNode - canvas element in which the image is drawn.
 * @param  {string} imagePath - image's path
 */
function drawImage(canvasNode, imagePath) {
  const canvas = document.querySelector(canvasNode);
  const context = canvas.getContext('2d');

  const image = new Image();
  image.src = imagePath;
  image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
}

drawImage('.rub-fixed', 'img/rub.png');
drawImage('.rub-fixed.mobile', 'img/rub-mobile.png');
drawImage('.rub-parallax.left > canvas', 'img/rub-sliced-one.png');
drawImage('.rub-parallax.left.mobile > canvas', 'img/rub-sliced-mobile-one.png');
drawImage('.rub-parallax.right > canvas', 'img/rub-sliced-two.png');
drawImage('.rub-parallax.right.mobile > canvas', 'img/rub-sliced-mobile-two.png');


/**
 * Apply the parallax to the sliced pictures
 */
for (let i = 0; i < scene.length; i += 1) {
  // Get odd elements of the loop
  if (i % 2 === 0) {
    new Parallax(scene[i], {
      relativeInput: true,
      limitY: 0,
    });
  }
  // Get even elements of the loop
  if (i % 2 !== 0) {
    new Parallax(scene[i], {
      relativeInput: true,
      invertX: false,
      limitY: 0,
    });
  }
}
