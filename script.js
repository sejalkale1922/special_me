
const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");

openBtn.addEventListener("click", () => {
  surprise.hidden = false;
  openBtn.hidden = true;

  surprise.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});
