const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenuPanel = document.getElementById("mobile-menu-panel");
const closeMobileMenu = document.getElementById("close-mobile-menu");
if (hamburgerBtn && mobileMenuPanel && closeMobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenuPanel.classList.remove("translate-x-full");
  });
  closeMobileMenu.addEventListener("click", () => {
    mobileMenuPanel.classList.add("translate-x-full");
  });
}

var myImage = document.getElementById("imageID");

function firstImage() {
  myImage.src = "Images/spotify-camp-nou.png";
}
function secondImage() {
  myImage.src = "Images/Nou-Palau-Blaugrana.png";
}
function thirdImage() {
  myImage.src = "Images/campus-barca.png";
}
function fourthImage() {
  myImage.src = "Images/Estadi_Johan_Cruyff.png";
}
