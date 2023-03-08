// Get form and submit button
const form = document.getElementById("download-form");
const submitBtn = document.getElementById("submit-btn");

// Add submit event listener
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Get form data
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const companyName = document.getElementById("company-name").value;
  const jobTitle = document.getElementById("job-title").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const optIn = document.getElementById("opt-in").checked;
  
  // Validate form fields
  if (!firstName || !lastName || !companyName || !jobTitle || !email) {
    alert("Please complete all required fields.");
    return;
  }
  
  // Validate email format
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  
  // Disable submit button and show loading spinner
  submitBtn.disabled = true;
  document.getElementById("loading-spinner").style.display = "block";
  
  // Simulate form submission delay
  setTimeout(() => {
    // Hide loading spinner and show confirmation message
    document.getElementById("loading-spinner").style.display = "none";
    document.getElementById("confirmation-message").style.display = "block";
    
    // Reset form fields and enable submit button
    form.reset();
    submitBtn.disabled = false;
  }, 2000);
});
