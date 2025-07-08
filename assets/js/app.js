//Loading header.html and footer.html in JS DOM
document.addEventListener("DOMContentLoaded", async (event) => {
    loadComponent("header", "components/header.html"
"./components/header.html"
"../components/header.html");  // if HTML is nested deeper
    
    loadComponent("footer", "../components/footer.html");
    console.log("DOM fully loaded and components loaded.");
  });
