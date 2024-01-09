const pplrSelectItems = document.querySelectorAll(".pplr-selecter-item");
const textarea = document.querySelector(".textarea-neon");
const previewText = document.querySelector("#Preview-text");
function applyFont(selectedFont) {
  textarea.style.fontFamily = selectedFont;
  textarea.style.fontSize = "16px";
  previewText.style.fontFamily = selectedFont;
  previewText.style.fontSize = "16px";
}

function handleFontItemClick(item) {
  pplrSelectItems.forEach((item) => item.classList.remove("selected-font"));

  item.classList.add("selected-font");

  const selectedFont = item.style.fontFamily;

  applyFont(selectedFont);
}

pplrSelectItems.forEach((item) => {
  item.addEventListener("click", () => {
    handleFontItemClick(item);
  });
});
