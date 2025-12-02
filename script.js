function showMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields!");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  const phonePattern = /^\+?[0-9\s\-()]{7,}$/;
  if (phone && !phonePattern.test(phone)) {
    alert("Please enter a valid phone number!");
    return false;
  }

  alert("Thank you for your message!");
  return false;
}
