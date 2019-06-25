const THEMES = ["light", "dark", "highcontrast"];

export function checkTheme() {
  setTheme(getTheme());
}

export function getTheme() {
  const theme = document.location.hash.substr(1);
  return THEMES.includes(theme) ? theme : "light";
}

export function setTheme(theme) {
  if (!THEMES.includes(theme)) {
    theme = getTheme();
  }
  const themeClass = `theme-${theme}`;
  const themeHash = `#${theme}`;

  if (themeClass !== document.documentElement.className) {
    document.documentElement.className = themeClass;
  }
  if (themeHash != window.location.hash) {
    window.location.hash = themeHash;
  }
}
