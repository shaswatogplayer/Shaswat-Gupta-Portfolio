// script.js
function displayCurrentDate() {
    const dateElement = document.getElementById("currentDate");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-US', options);
}

// Call the function to set the date
displayCurrentDate();
