// Accordion Functionality
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(btn => {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // Close other panels
      document.querySelectorAll('.panel').forEach(p => p.style.maxHeight = null);
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
