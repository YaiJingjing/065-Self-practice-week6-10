document.addEventListener("DOMContentLoaded", () => {
  const bgColorInput = document.getElementById("bgColor");
  const fontColorInput = document.getElementById("fontColor");
  const fontSizeSelect = document.getElementById("fontSize");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");
  const savedBg = localStorage.getItem("bgColor") || "#ffffff";
  const savedFont = localStorage.getItem("fontColor") || "#000000";
  const savedSize = localStorage.getItem("fontSize") || "medium";

  bgColorInput.value = savedBg;
  fontColorInput.value = savedFont;
  fontSizeSelect.value = savedSize;

  applySettings(savedBg, savedFont, savedSize);

  saveBtn.addEventListener("click", () => {
    const bg = bgColorInput.value;
    const font = fontColorInput.value;
    const size = fontSizeSelect.value;

    localStorage.setItem("bgColor", bg);
    localStorage.setItem("fontColor", font);
    localStorage.setItem("fontSize", size);

    applySettings(bg, font, size);
  });

  resetBtn.addEventListener("click", () => {
    localStorage.clear();
    bgColorInput.value = "#ffffff";
    fontColorInput.value = "#000000";
    fontSizeSelect.value = "medium";
    applySettings("#ffffff", "#000000", "medium");
  });

  function applySettings(bg, font, size) {
    document.body.style.backgroundColor = bg;
    document.body.style.color = font;

    switch (size) {
      case "small":
        document.body.style.fontSize = "14px";
        break;
      case "medium":
        document.body.style.fontSize = "18px";
        break;
      case "large":
        document.body.style.fontSize = "24px";
        break;
    }
  }
});
