const image = document.getElementById('image');
const staticSrc = image.src;
const gifSrc = 'resources/mj1.gif';
const redirectUrl = 'index1.html';
const redirectDelay = 5000; // 5 seconds

image.addEventListener('click', function () {
  if (image.src === staticSrc) {
    image.src = gifSrc;
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, redirectDelay);
  }
});