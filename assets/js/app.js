//Loading header.html and footer.html in JS DOM
document.addEventListener("DOMContentLoaded", async (event) => {
    loadComponent("header", "./components/header.html");
    loadComponent("footer", "./components/footer.html");
    console.log("DOM fully loaded and components loaded.");
  });
