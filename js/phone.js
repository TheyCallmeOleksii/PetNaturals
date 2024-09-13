const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("focus", function () {
  if (phoneInput.value.length < 6) {
    phoneInput.value = "+38(0";
  }
  setTimeout(() => {
    phoneInput.setSelectionRange(6, 6);
  }, 0);
});

phoneInput.addEventListener("input", function () {
  const mask = "+38(0__)___-__-__";
  let input = phoneInput.value;
  let digitsOnly = input.replace(/\D/g, "").slice(3);
  let formatted = "+38(0";

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

  let newCursorPosition = formatted.indexOf("_");
  if (newCursorPosition === -1) {
    newCursorPosition = formatted.length;
  }
  phoneInput.setSelectionRange(newCursorPosition, newCursorPosition);
});
