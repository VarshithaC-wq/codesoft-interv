// Display variable
let display = document.getElementById('display');

// Append number or operator
function append(value) {
  display.value += value;
}

// Clear all
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Toggle light/dark mode
document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  let isDark = document.body.classList.contains('dark');
  document.getElementById('modeToggle').textContent = isDark ? '☀' : '🌙';
});