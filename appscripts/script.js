const image = document.getElementById('image');
const staticSrc = image.src;
const gifSrc = 'resources/mj1.gif';
const redirectUrl = 'index1.html';
const redirectDelay = 5000; // 5 seconds

function preloadGif(url) {
  const img = new Image();
  img.src = url;
}

// Preload the GIF
preloadGif(gifSrc);

image.addEventListener('click', function () {
  if (image.src === staticSrc) {
    image.src = gifSrc;
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, redirectDelay);
  }
});