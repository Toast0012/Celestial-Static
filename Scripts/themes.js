function applyTheme(newTheme) {
  // Remove existing stylesheets
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  stylesheets.forEach(stylesheet => stylesheet.remove());

  // Add the new stylesheet
  const newLink = document.createElement('link');
  newLink.rel = 'stylesheet';
  newLink.href = `/Static/Assets/Themes/${newTheme}.css`; // Adjust path as needed
  document.head.appendChild(newLink);
}

// Apply initial theme from localStorage
document.addEventListener('DOMContentLoaded', function() {
  const storedTheme = localStorage.getItem('Theme') || 'Default';
  applyTheme(storedTheme);

  const themeSelect = document.getElementById('themes');
  themeSelect.value = storedTheme; // Set the select element's value

  // Apply theme on selection change
  themeSelect.addEventListener('change', function() {
    const selectedTheme = this.value;
    localStorage.setItem('Theme', selectedTheme);
    applyTheme(selectedTheme);
  });
});
