document.getElementById('hamburgerMenu').addEventListener('click', function () {
  var navLinks = document.getElementById('navbar-menu');
  navLinks.classList.toggle('active');
});

var navLinks = document.getElementById('navbar-menu');

// Event listener untuk menutup menu saat klik di luar navbar
document.addEventListener('click', function (event) {
  // Jika klik terjadi di luar elemen navbar dan hamburger, tutup menu
  if (!navbar.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});
