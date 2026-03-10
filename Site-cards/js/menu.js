document.addEventListener("DOMContentLoaded", () => {

  /* ===== MENU MOBILE ===== */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {

      menu.classList.toggle("active");

      // muda o ícone
      if(menu.classList.contains("active")){
        toggle.textContent = "✖";
      }else{
        toggle.textContent = "☰";
      }

    });
  }

  /* ===== ANIMAÇÃO DOS CARDS ===== */
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const cardInfo = checkbox.nextElementSibling.querySelector(".card-info");

      if (!cardInfo) return;

      const titles = cardInfo.querySelectorAll("h1");

      titles.forEach((h1) => {
        h1.classList.remove("animate");
        void h1.offsetWidth;
        h1.classList.add("animate");
      });
    });
  });

});