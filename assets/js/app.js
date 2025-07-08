//Loading header.html and footer.html in JS DOM
function getRelativePath(targetPath) {
  const depth = window.location.pathname.split("/").length - 2;
  return "../".repeat(depth) + targetPath;
}

document.addEventListener("DOMContentLoaded", async () => {
  const path = getRelativePath("components/header.html");
  await loadComponent("header", path);
});

