// protect.js

// Disable right-click
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// Disable certain keyboard shortcuts: F12, Ctrl+U/S/C, Ctrl+Shift+I
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && ["u", "U", "s", "S", "c", "C"].includes(e.key)) ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i"))
  ) {
    e.preventDefault();
  }
});
