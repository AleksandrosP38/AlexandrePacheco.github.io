// Handle the hamburger menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = ["VIDEO GAME PROGRAMMER"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Content Interaction Handlers
const originalImageHTML = `<img src="PortImage.jpg" alt="">`;
const originalImageStyle = {
    borderRadius: "50%",
    width: "500px",
    height: "80vh",
    boxShadow: "0 0 50px #077b32",
};
const originalText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Fugit quasi commodi quia rerum, iste corporis expedita in excepturi nesciunt 
repellendus quisquam amet provident ad mollitia debitis odit voluptatem necessitatibus tempora.`;

const aboutButton = document.getElementById("about-button");
const homeButton = document.getElementById("home-button");
const skillsButton = document.getElementById("skills-button");
const projectsButton = document.getElementById("projects-button");
const contactButton = document.getElementById("contact-button");
const mainText = document.getElementById("main-text");
const mainImage = document.querySelector(".main-container .image");
const mainContainer = document.querySelector(".main-container");

// Create the "Next Project" button dynamically
let nextProjectButton = document.createElement("button");
nextProjectButton.textContent = "Next Project";
nextProjectButton.style.display = "none"; // Initially hidden
nextProjectButton.style.backgroundColor = "#077b32";
nextProjectButton.style.color = "white";
nextProjectButton.style.border = "none";
nextProjectButton.style.padding = "10px 20px";
nextProjectButton.style.borderRadius = "5px";
nextProjectButton.style.fontSize = "1.2rem";
nextProjectButton.style.cursor = "pointer";
nextProjectButton.style.marginTop = "20px";

// Variable to keep track of the Next Project button click state
let nextProjectClickCount = 0;
// Append the "Next Project" button to the content section
const contentContainer = document.querySelector(".content");
contentContainer.appendChild(nextProjectButton);

// Modify the resetContent function to apply the correct image styles
function resetContent() {
    mainText.textContent = originalText;
    mainImage.innerHTML = originalImageHTML;

    // Apply the original image styles dynamically
    Object.assign(mainImage.style, originalImageStyle);
}

// Initialize everything on page load
window.onload = () => {
    resetContent(); // Apply the styles on page load
    typeWriter();
};

// Update button listeners to ensure the image remains intact
aboutButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetContent(); // Only reset the content, not the image
    mainText.textContent = "This is the About button test.";
});

skillsButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetContent();
    mainText.textContent = "This is the Skills button test.";
});

// Add click event listener to the "Services" button
projectsButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Show the "Next Project" button
    nextProjectButton.style.display = "block";

    // Change the text content of the paragraph
    mainText.textContent = "This is the Services button test.";

    // Add a random video in the image container (same logic as before)
    const videoUrls = [
        "https://www.w3schools.com/html/movie.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4",
    ];
    const randomVideoUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];
    const videoElement = document.createElement("video");
    videoElement.src = randomVideoUrl;
    videoElement.controls = true;
    videoElement.style.width = "100%";
    videoElement.style.height = "auto";

    // Clear the main image container and append the video
    mainImage.innerHTML = "";
    mainImage.style.borderRadius = "0";
    mainImage.style.width = "auto";
    mainImage.style.height = "auto";
    mainImage.appendChild(videoElement);
});

// Hide the "Next Project" button when any other button is clicked
[homeButton, aboutButton, skillsButton, contactButton].forEach((button) => {
    button.addEventListener("click", () => {
        nextProjectButton.style.display = "none"; // Hide the button
    });
});

// Add click event listener to the "Next Project" button
nextProjectButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Cycle through the three states
    if (nextProjectClickCount === 0) {
        mainText.textContent = "This is the next project button test.";
    } else if (nextProjectClickCount === 1) {
        mainText.textContent = "This is the second next project button test.";
    } else if (nextProjectClickCount === 2) {
        mainText.textContent = "This is the Services button test."; // Reset to Services text
    }

    // Increment the click count and reset after 3 clicks
    nextProjectClickCount = (nextProjectClickCount + 1) % 3;
});

contactButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetContent();
    mainText.innerHTML = `<p>This is the Contacts button test.</p><p>This is my cellphone number: (123) 456-7890</p>`;
});

homeButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetContent();
});

// Initialize everything on page load
window.onload = () => {
    typeWriter();
};
