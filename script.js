const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Close nav menu on link click (for mobile)
document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

//Form validation

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple validation
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    errorMessage.textContent = "Please fill in all fields.";
    successMessage.textContent = "";
    return;
  }

  // If validation passes
  errorMessage.textContent = "";
  successMessage.textContent = "Your message has been sent successfully!";
  form.reset();
});

// Close messages on input focus
[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener("focus", () => {
    errorMessage.textContent = "";
    successMessage.textContent = "";
  });
});
