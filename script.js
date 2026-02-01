//your JS code here. If required.
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const form = document.getElementById("form");

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
  fontSizeInput.value = savedFontSize;
}

if (savedFontColor) {
  document.documentElement.style.setProperty("--fontcolor", savedFontColor);
  fontColorInput.value = savedFontColor;
}

// Save preferences
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});
