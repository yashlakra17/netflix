document.querySelector("button").addEventListener("click", () => {
  const email = document.querySelector("input").value.trim();
  
  // Simple email validation
  if (!email || !email.includes("@")) {
    alert("Please enter a valid email address.");
  } else {
    // Redirect to main Netflix home page (your clone)
    window.location.href = "main.html";
  }
});
