// Handle product thumbnails -> swap main image
document.addEventListener("DOMContentLoaded", () => {
const mainImage = document.getElementById("mainProductImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const newSrc = thumb.getAttribute("data-img");
    if (!newSrc || !mainImage) return;

    mainImage.src = newSrc;

    // Active state
    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
});