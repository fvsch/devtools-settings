export function checkTheme() {
  setTheme(getTheme());
}

export function getTheme() {
  if (document.location.hash === '#dark') {
    return 'dark';
  }
  return 'light';
}

export function setTheme(theme) {
  if (!['light', 'dark'].includes(theme)) {
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
