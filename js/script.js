const toggleButton = document.querySelector(".toggle-button");
const sidenav = document.querySelector(".sideNav");

sidenav.style.right = "-25em";
toggleButton.addEventListener("click", () => {
  if (sidenav.style.right == "-25em") {
    sidenav.style.right = "0";
  } else {
    sidenav.style.right = "-25em";
  }
});
