const input = document.getElementById("input");
const btn = document.getElementById("button");
const div = document.getElementById("div");



btn.style.display = "none";

// Отслеживаем изменения в поле ввода
input.addEventListener("input", () => {
  if (input.value) {
      btn.style.display = "inline-block";
      
  } else {
    btn.style.display = "none";
  }
});