// Lightbox functionality
document.addEventListener("DOMContentLoaded", function () {
  const photo = document.getElementById("lightbox-photo");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.style = "display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); justify-content: center; align-items: center; z-index: 9999;";
  lightbox.innerHTML = '<img src="" style="max-width: 80%; max-height: 80%;">';
  document.body.appendChild(lightbox);

  // When clicking on the image, show the lightbox
  photo.addEventListener("click", function () {
    lightbox.style.display = "flex";
    lightbox.querySelector("img").src = photo.src;
  });

  // When clicking anywhere in the lightbox, close it
  lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
});

// Leaflet Map Initialization
document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([53.3854, -6.2576], 15); // Example coordinates
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
  }).addTo(map);

  // Example marker
  L.marker([53.3854, -6.2576])
    .addTo(map)
    .bindPopup("Londis DCU Glasnevin")
    .openPopup();
});
 
