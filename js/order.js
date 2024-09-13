function order() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name && phone) {
    alert(`Замовлення відправлено!\nІм'я: ${name}\nТелефон: ${phone}`);
  } else {
    alert("Будь ласка, заповніть всі поля!");
  }
}
