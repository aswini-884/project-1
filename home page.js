

window.addEventListener('scroll', () => {
  const heading = document.getElementById('heading');
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    heading.style.opacity = '0';
    heading.style.transform = 'translate(-50%, -60%)';
  } else {
    heading.style.opacity = '1';
    heading.style.transform = 'translate(-50%, -50%)';
  }
});
document.querySelectorAll('.image-box').forEach(function(box) {
    box.addEventListener('touchstart', function() {
      this.querySelector('.overlay').style.opacity = '0.6';
      this.querySelector('.label-text').style.opacity = '0.6';
    });

    box.addEventListener('touchend', function() {
      setTimeout(() => {
        this.querySelector('.overlay').style.opacity = '0';
        this.querySelector('.label-text').style.opacity = '0';
      }, 1000);
    });
  });
