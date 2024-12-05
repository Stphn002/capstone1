document.getElementById("bookingForm").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time").value.trim();
    const pax = document.getElementById("pax").value.trim();

    if (!name || !email || !date || !time || !pax) {
        e.preventDefault();
        alert("Please fill in all required fields!");
    } else if (pax <= 0) {
        e.preventDefault();
        alert("Number of people must be at least 1!");
    } else {
        alert("Booking Submitted! Thank you.");
    }
});