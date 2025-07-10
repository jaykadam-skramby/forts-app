
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoomable');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    images.forEach((img) => {
      img.addEventListener('click', () => {
        if (img.src) {
          lightboxImg.src = img.src;
          lightbox.style.display = 'flex';
        }
      });
    });

    function closeLightbox() {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg) {
        closeLightbox();
      }
    });
  });

function togglePassword() {
  const password = document.getElementById("password");
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
}
