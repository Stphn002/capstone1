// Redirect to homepage.html on form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = "admin.html"; // Redirect to homepage
});