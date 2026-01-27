function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
  }
  
  const about = document.querySelector(".about");
  const bars = document.querySelectorAll(".bar div");
  
  window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;
  
    if (about.getBoundingClientRect().top < trigger) {
      about.classList.add("show");
    }
  
    bars.forEach(bar => {
      if (bar.getBoundingClientRect().top < trigger) {
        bar.style.width = bar.dataset.width;
      }
    });
  });
  