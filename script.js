let images = [
  "img/a.jpg",
  "img/piscis-retrato-mujer-hermosa.jpg",
  "img/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna.jpg",
  "img/HD-wallpaper-clothes-store-interior.jpg"
];

var currentImageIndex = 0;

function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  var imageUrl = "url('" + images[currentImageIndex] + "')";
  var sliderElement = document.getElementById("background-slider");
  sliderElement.style.backgroundImage = imageUrl;
  sliderElement.classList.add("background-slider");
  setTimeout(function() {
    sliderElement.classList.remove("background-slider");
  }, 1000);
}

setInterval(() => {
  changeBackground()
}, 6000);

