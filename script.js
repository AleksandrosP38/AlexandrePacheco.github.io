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
const originalText = `I'm Alexandre Alves Pacheco, a video game programmer from Porto, Portugal. Currently finishing my bachelor's in Video Games and Multimedia Applications at Lusófona University. My focus is on game development, with expertise in C# and Blueprints, especially in level design, interfaces, and character behaviors. I’m always eager to push the limits of interactive experiences and create immersive gameplay.
`;

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

// About Button Event Listener
aboutButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetContent(); // Only reset the content, not the image

    mainText.innerHTML = `
        <h2>About Me</h2>
        <p>I'm a video game programmer based in Porto, Portugal. From a young age, I’ve been passionate about video games and sports. My journey into game development began at Lusófona University of Porto, where I am now in my final year of a bachelor's degree in Video Games and Multimedia Applications.</p>
        <p>Throughout my studies, I've gained proficiency in programming languages like C# and Blueprints, while also exploring web technologies such as HTML, CSS, and JavaScript. My primary focus has always been game programming, especially working on level design, character behaviors, and user interfaces. I find programming the levels and interfaces to be the most exciting part of game development, but I also enjoy creating the behaviors that bring characters to life.</p>
        <p>Additionally, I've worked on sound programming using FMOD, which has allowed me to integrate dynamic audio experiences into my projects. Whether it's programming gameplay mechanics or creating immersive soundscapes, I’m always eager to push the limits of what’s possible in game development.</p>
        <p>If you're looking for a dedicated and passionate developer for your next project, feel free to reach out. Let’s create something amazing together!</p>
    `;
});

skillsButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetContent();

    mainText.innerHTML = `
        <h2>Programming Languages</h2>
        <ul>
            <li>C#</li>
            <li>Blueprints</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        
        <h2>Engines</h2>
        <ul>
            <li>Unity</li>
            <li>Unreal Engine</li>
            <li>Godot</li>
        </ul>

        <h2>IDEs</h2>
        <ul>
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
        </ul>

        <h2>Other Programs</h2>
        <ul>
            <li>Adobe After Effects</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
        </ul>
    `;
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

// Home Button Event Listener
homeButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetContent();
    mainText.innerHTML = `
        I'm Alexandre Alves Pacheco, a video game programmer from Porto, Portugal. Currently finishing my bachelor's in Video Games and Multimedia Applications at Lusófona University. My focus is on game development, with expertise in C# and Blueprints, especially in level design, interfaces, and character behaviors. I’m always eager to push the limits of interactive experiences and create immersive gameplay.
    `;
});

// Initialize everything on page load
window.onload = () => {
    typeWriter();
};
