const menuBar = document.querySelector(".menuBar");
menuBar.addEventListener("click", openNavBar);

function openNavBar() {
  const header = document.querySelector(".header");
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    header.style.maxHeight = header.scrollHeight + "px";
  } else {
    header.removeAttribute("style");
  }
}
