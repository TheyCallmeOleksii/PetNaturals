const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("focus", function () {
  // При фокусі на полі встановлюємо курсор після "+38(0"
  if (phoneInput.value.length < 6) {
    phoneInput.value = "+38(0"; // Якщо значення коротше, встановлюємо початкову маску
  }
  setTimeout(() => {
    phoneInput.setSelectionRange(6, 6); // Встановлюємо курсор після "+38(0"
  }, 0);
});

phoneInput.addEventListener("input", function () {
  const mask = "+38(0__)___-__-__";
  let input = phoneInput.value;
  let digitsOnly = input.replace(/\D/g, "").slice(3); // Видаляємо нецифрові символи та пропускаємо перші три цифри
  let formatted = "+38(0";

  // Форматуємо номер за маскою
  for (let i = 5; i < mask.length; i++) {
    if (!digitsOnly) break;
    if (mask[i] === "_" && digitsOnly) {
      formatted += digitsOnly[0];
      digitsOnly = digitsOnly.substring(1);
    } else {
      formatted += mask[i];
    }
  }

  phoneInput.value = formatted;

  // Встановлюємо курсор за останнім введеним символом
  let newCursorPosition = formatted.indexOf("_");
  if (newCursorPosition === -1) {
    newCursorPosition = formatted.length; // Якщо всі символи введені, ставимо курсор в кінець
  }
  phoneInput.setSelectionRange(newCursorPosition, newCursorPosition);
});
