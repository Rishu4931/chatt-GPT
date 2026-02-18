// Button click interaction
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "You clicked the button!";
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  document.getElementById("formMessage").textContent =
    `Thank you, ${name}! We will contact you at ${email}.`;
});