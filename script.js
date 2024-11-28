// script.js
function displayCurrentDate() {
    const dateElement = document.getElementById("currentDate");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-US', options);

}

// Call the function to set the date
displayCurrentDate();


        // Get references to HTML elements
        const videoContainer = document.getElementById('videoContainer');
        const portfolioContent = document.getElementById('portfolioContent');
        const skipButton = document.getElementById('skipButton');
        const introVideo = document.getElementById('introVideo');

        // Show the video container and hide the portfolio content initially

        
        videoContainer.style.display = 'flex';



        // Function to display the portfolio content
       function showPortfolio() {
           videoContainer.style.display = 'none';
        portfolioContent.style.display = 'block';
        }

        // Event listener: Show portfolio after video ends
        introVideo.addEventListener('ended', showPortfolio);

        // Event listener: Skip the video and show the portfolio
       skipButton.addEventListener('click', showPortfolio);
    
