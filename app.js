const list = document.getElementById("list");

function loadBookings() {
  list.innerHTML = "";
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.forEach(b => {
    const li = document.createElement("li");
    li.textContent = `${b.name} - ${b.date} at ${b.time}`;
    list.appendChild(li);
  });
}

function saveBooking() {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !date || !time) {
    alert("Fill all fields");
    return;
  }

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push({ name, date, time });
  localStorage.setItem("bookings", JSON.stringify(bookings));

  loadBookings();
}

loadBookings();
