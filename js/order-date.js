function updateDate() {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  document.getElementById(
    "date-display"
  ).innerText = `Order date: ${formattedDate}`;
}

window.onload = updateDate;
