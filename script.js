const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const saveBtn = document.querySelector("input[type='submit']");

// Helper: set cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Helper: get cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

// Apply saved preferences on page load
const savedFontSize = getCookie("fontsize");
const savedFontColor = getCookie("fontcolor");

if (savedFontSize) {
  document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
  document.body.style.fontSize = savedFontSize + "px";
  fontSizeInput.value = savedFontSize;
}

if (savedFontColor) {
  document.documentElement.style.setProperty("--fontcolor", savedFontColor);
  document.body.style.color = savedFontColor;
  fontColorInput.value = savedFontColor;
}

// Save preferences
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  document.body.style.fontSize = fontSize + "px";
  document.body.style.color = fontColor;
});
