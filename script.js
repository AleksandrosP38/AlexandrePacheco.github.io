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
const experienceButton = document.getElementById("experience-button");






// Get references to elements
const socialLinks = document.getElementById("social-links");
const otherButtons = [
    document.getElementById("home-button"),
    document.getElementById("about-button"),
    document.getElementById("skills-button"),
    document.getElementById("projects-button"),
];

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

function removeProjectLinkButton() {
    const projectLinkButton = document.getElementById("project-link-button");
    if (projectLinkButton) {
        projectLinkButton.remove();
    }
}

function removeGameLinkButton() {
    const gamelinkbutton = document.getElementById("game-link-button");
    if (gamelinkbutton) {
        gamelinkbutton.remove();
    }
}


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
            <li>C++(Very Basic)</li>
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
            <li>FMOD</li>
        </ul>
    `;
});

experienceButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetContent();
    removeProjectLinkButton();
    removeGameLinkButton();
    nextProjectButton.style.display = "none";

    mainText.innerHTML = `
        <h2>Professional Experience – The Indigent Studio</h2>
        <p><strong>Role:</strong> Programmer (Internship)</p>
        <p><strong>Time:</strong> April 2025 to July 2025</p>
        <p>During my internship at The Indigent Studio, I worked as a programmer focused on optimizing and enhancing core systems for a game project.</p>
        <ul>
            <li><strong>Gameplay Programming:</strong> Refactored and optimized gameplay scripts for better clarity and performance.</li>
            <li><strong>UI Programming:</strong> Designed and implemented a level selection menu with star-based progression and lock/unlock logic.</li>
            <li><strong>Input System Development:</strong> Reworked the player's control scheme, replacing mouse-based movement with a complete WASD keyboard system.</li>
            <li><strong>Debugging:</strong> Identified and resolved bugs related to movement, character rotation, and camera behavior.</li>
        </ul>
        <p>This hands-on experience helped solidify my understanding of real-world game production workflows and polish my programming practices for future professional work.</p>
    `;

    // Optionally add a placeholder image or message
    mainImage.innerHTML = `
    <img src="TheIndigentStudioImage.jpg" alt="The Indigent Studio" style="width: 100%; max-width: 600px; border-radius: 20px; box-shadow: 0 0 30px #077b32;">
`;
    mainImage.style.borderRadius = "0";
    mainImage.style.width = "auto";
    mainImage.style.height = "auto";
    // Hide social links if visible
    socialLinks.style.display = "none";
});


// Hide the "Next Project" button when any other button is clicked
[homeButton, aboutButton, skillsButton, contactButton, experienceButton].forEach((button) => {
    button.addEventListener("click", () => {
        nextProjectButton.style.display = "none";
        removeProjectLinkButton();
        removeGameLinkButton();
        removeSpecialActionButton?.();
        socialLinks.style.display = "none";
    });
});


// Array of project data (videos and dynamic text)
const projects = [
    {
        video: "https://www.youtube.com/embed/Xs1K7F9pfr8", // Yin Yang video
        updateContent: () => {
            mainText.innerHTML = `
                <h2>Project 1: Ying Yang </h2> 
                <p><strong>Type:</strong> 2D Co-op Platformer, Unity</p>
                <p><strong>Time:</strong> September 2023 to January 2024</p>
                <p>Ying Yang is a 2D platformer game where two players cooperate to complete levels. One player controls the black character, focusing exclusively on attack, while the other controls the white character, specializing in defense. Each character has unique abilities, and there are areas accessible only to one of them, depending on their color. The players must collaborate to overcome enemies and traps, collect keys, and reach the end of the levels.</p> 
                <p><strong>My Contributions:</strong> I worked exclusively as a programmer in this project. 
                <ul>
                    <li><strong>Gameplay Programming:</strong> Developed local multiplayer mechanics with individual player abilities </li>
                    <li><strong>Level Interactions:</strong> Implemented interactions with levels, including color-based elements and eveloped portal mechanics for level transitions.</li>
                </ul>`;        },
    },
    {
        video: "https://www.youtube.com/embed/jOP96q0sDeA", // Duality of Insanity video
        updateContent: () => {
            mainText.innerHTML = `
                <h2>Project 2: Duality of Insanity</h2> 
                <p><strong>Type:</strong> 3D Horror/Puzzle Game, Unreal Engine </p>
                <p><strong>Time:</strong> January 2024 to July 2024</p>
                <p>Duality of Insanity is a 3D horror/puzzle game where the player can switch between two modes: a normal mode and an "insane" mode. In the insane mode, the map and objects dynamically change. The player must leverage these modes to find clues and access exclusive areas in each mode to solve puzzles and progress through the game. However, staying in the insane mode for too long results in death, adding a layer of strategy and tension.</p> 
                <p><strong>My Contributions:</strong> For this project, I worked as both a programmer and a sound designer. My tasks included:</p>
                <ul>
                    <li><strong>UI Programming:</strong> Implementing the main menu, pause menu, and the insanity meter.</li>
                    <li><strong>Puzzle Programming:</strong> Developing two out of three puzzles in the game, specifically the first puzzle (the balance puzzle) and the final puzzle (the lever puzzle).</li>
                    <li><strong>Sound Design:</strong> Creating, producing, and implementing all sound effects and audio systems in the game.</li>
                </ul>`;
        },
    },
    {
        video: "https://www.youtube.com/embed/A_feXMwKOBo", // Heads or Death video
        updateContent: () => {
            mainText.innerHTML = `
                <h2>Project 3: Heads or Death </h2> 
                <p><strong>Type:</strong> Fast Paced 3D Shooter, Unreal Engine</p>
                <p><strong>Time:</strong> September 2024 to July 2025</p>
                <p>Heads or Death is a 3D fast-paced shooter where the player must eliminate as many enemies as possible in a short period to score the highest points. Special enemies appear during gameplay, and defeating them grants buffs or debuffs based on the player’s precision, adding a layer of risk and reward.</p> 
                <p><strong>My Contributions:</strong> Due to the short team size, my roles extended beyond gameplay programming to include other areas of development:</p>
                <ul>    
                    <li><strong>Gameplay Programming:</strong> Assisting with gameplay mechanics, including programming one of the enemies in the game and troubleshooting/debugging issues as they arise.</li>
                    <li><strong>UI Design & Programming:</strong> Creating menus, health bars, and options screens.</li>
                    <li><strong>Level Design:</strong> Designing all levels currently in the game.</li>
                    <li><strong>Game Design:</strong> Recently taking on the role of Game Designer, I developed the current game concept and mechanics.</li>
                </ul>`;
        },
    },
];

// Keep track of the current project index
let currentProjectIndex = 0;

// Add this helper function to remove the "Special Action" button if it exists
function removeSpecialActionButton() {
    const specialActionButton = document.getElementById("special-action-button");
    if (specialActionButton) {
        specialActionButton.remove();
    }
}

projectsButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Remove the "Project Link" button before adding a new one (if any)
    removeProjectLinkButton();
    removeGameLinkButton();

    // Show the "Next Project" button
    nextProjectButton.style.display = "block";

    // Reset to the first project
    currentProjectIndex = 0;

    // Get the first project
    const currentProject = projects[currentProjectIndex];

    // Update the text content using the project's updateContent function
    currentProject.updateContent();

    // Clear the main image container first
    mainImage.innerHTML = "";
    mainImage.style.borderRadius = "0";
    mainImage.style.width = "auto";
    mainImage.style.height = "auto";

    // Check if the current project is Project 1, 2, or 3
    if (currentProjectIndex === 0) { // Project 1 (index 0)
        const videoElement = document.createElement("iframe");
        videoElement.src = "https://www.youtube.com/embed/Xs1K7F9pfr8"; // Project 1 YouTube video
        videoElement.frameBorder = "0";
        videoElement.allowFullscreen = true;
        videoElement.style.width = "100vw";  // Full width of the viewport
        videoElement.style.height = "56.25vw"; // Maintain 16:9 aspect ratio (Height = Width * 9/16)
        videoElement.style.maxWidth = "1200px"; // Prevents excessive stretching on large screens
        videoElement.style.maxHeight = "675px"; // Keeps a reasonable max size
        videoElement.style.display = "block";
        videoElement.style.margin = "auto";   
        mainImage.appendChild(videoElement);

        mainImage.appendChild(videoElement);
    } else if (currentProjectIndex === 1) { // Project 2 (index 1)
        const videoElement = document.createElement("iframe");
        videoElement.src = "https://www.youtube.com/embed/jOP96q0sDeA"; // Project 2 YouTube video
        videoElement.frameBorder = "0";
        videoElement.allowFullscreen = true;
        videoElement.style.width = "100vw";  // Full width of the viewport
        videoElement.style.height = "56.25vw"; // Maintain 16:9 aspect ratio (Height = Width * 9/16)
        videoElement.style.maxWidth = "1200px"; // Prevents excessive stretching on large screens
        videoElement.style.maxHeight = "675px"; // Keeps a reasonable max size
        videoElement.style.display = "block";
        videoElement.style.margin = "auto";   
        mainImage.appendChild(videoElement);
    } else if (currentProjectIndex === 2) { // Project 3 (index 2)
        const videoElement = document.createElement("iframe");
        videoElement.src = "https://www.youtube.com/embed/A_feXMwKOBo"; // Project 3 YouTube video
        videoElement.frameBorder = "0";
        videoElement.allowFullscreen = true;
        videoElement.style.width = "100vw";  // Full width of the viewport
        videoElement.style.height = "56.25vw"; // Maintain 16:9 aspect ratio (Height = Width * 9/16)
        videoElement.style.maxWidth = "1200px"; // Prevents excessive stretching on large screens
        videoElement.style.maxHeight = "675px"; // Keeps a reasonable max size
        videoElement.style.display = "block";
        videoElement.style.margin = "auto";   
        mainImage.appendChild(videoElement);
    }

    // Add a new "Project Link" button dynamically
    const newButton = document.createElement("button");
    newButton.textContent = "Project Link"; // Button text
    newButton.style.backgroundColor = "#007bff";
    newButton.style.color = "white";
    newButton.style.border = "none";
    newButton.style.padding = "10px 20px";
    newButton.style.borderRadius = "5px";
    newButton.style.fontSize = "1.2rem";
    newButton.style.cursor = "pointer";
    newButton.style.marginTop = "20px";

    // Add an ID to the new button to easily target it later
    newButton.id = "project-link-button";

    // Set the initial link for Project 1
    newButton.onclick = () => window.open("https://github.com/k3vinszn/Ying-Yang1", "_blank");

    // Append the new button to the content container
    contentContainer.appendChild(newButton);


    // Add a new "Game Link" button dynamically
    const gamelinkbutton = document.createElement("button");
    gamelinkbutton.textContent = "Game Link"; // Button text
    gamelinkbutton.style.backgroundColor = "#800080";  // Purple color
    gamelinkbutton.style.color = "white";
    gamelinkbutton.style.border = "none";
    gamelinkbutton.style.padding = "10px 20px";
    gamelinkbutton.style.borderRadius = "5px";
    gamelinkbutton.style.fontSize = "1.2rem";
    gamelinkbutton.style.cursor = "pointer";
    gamelinkbutton.style.marginTop = "20px";

    // Add an ID to the new button to easily target it later
    gamelinkbutton.id = "game-link-button";

    // Set the initial link for Project 1
    gamelinkbutton.onclick = () => window.open("https://ghostcyder.itch.io/yin-yang?secret=pqa41VKpNwUJuX3Tb5nDxQh6Dw", "_blank");

    // Append the new button to the content container
    contentContainer.appendChild(gamelinkbutton);
});




// Add click event listeners to other buttons (Home, About, Skills, Contact) to remove the "Special Action" button
[homeButton, aboutButton, skillsButton, contactButton].forEach((button) => {
    button.addEventListener("click", () => {
        removeSpecialActionButton(); // Remove the "Special Action" button
        nextProjectButton.style.display = "none"; // Optionally, hide the "Next Project" button if you want
    });
});




nextProjectButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Move to the next project index (loop back to the start if at the end)
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;

    // Get the current project
    const currentProject = projects[currentProjectIndex];

    // Update the text content using the project's updateContent function
    currentProject.updateContent();

    // Clear the main image container first
    mainImage.innerHTML = "";
    mainImage.style.borderRadius = "0";
    mainImage.style.width = "auto";
    mainImage.style.height = "auto";

    // Check if the current project is Project 1, 2, or 3
    if (currentProjectIndex === 0) { // Project 1 (index 0)
        const videoElement = document.createElement("iframe");
        videoElement.src = "https://www.youtube.com/embed/Xs1K7F9pfr8"; // New Project 1 YouTube video
        videoElement.frameBorder = "0";
        videoElement.allowFullscreen = true;
        videoElement.style.width = "100vw";  // Full width of the viewport
        videoElement.style.height = "56.25vw"; // Maintain 16:9 aspect ratio (Height = Width * 9/16)
        videoElement.style.maxWidth = "1200px"; // Prevents excessive stretching on large screens
        videoElement.style.maxHeight = "675px"; // Keeps a reasonable max size
        videoElement.style.display = "block";
        videoElement.style.margin = "auto";   
        mainImage.appendChild(videoElement);
    }
     else if (currentProjectIndex === 1) { // Project 2 (index 1)
        const videoElement = document.createElement("iframe");
        videoElement.src = "https://www.youtube.com/embed/jOP96q0sDeA"; // Updated Project 2 video
        videoElement.frameBorder = "0";
        videoElement.allowFullscreen = true;
        videoElement.style.width = "100vw";  // Full width of the viewport
        videoElement.style.height = "56.25vw"; // Maintain 16:9 aspect ratio (Height = Width * 9/16)
        videoElement.style.maxWidth = "1200px"; // Prevents excessive stretching on large screens
        videoElement.style.maxHeight = "675px"; // Keeps a reasonable max size
        videoElement.style.display = "block";
        videoElement.style.margin = "auto";   
        mainImage.appendChild(videoElement);
        
    } else if (currentProjectIndex === 2) { // Project 3 (index 2)
        const videoElement = document.createElement("iframe");
        videoElement.src = "https://www.youtube.com/embed/A_feXMwKOBo"; // Project 3 YouTube video
        videoElement.frameBorder = "0";
        videoElement.allowFullscreen = true;
        videoElement.style.width = "100vw";  // Full width of the viewport
        videoElement.style.height = "56.25vw"; // Maintain 16:9 aspect ratio (Height = Width * 9/16)
        videoElement.style.maxWidth = "1200px"; // Prevents excessive stretching on large screens
        videoElement.style.maxHeight = "675px"; // Keeps a reasonable max size
        videoElement.style.display = "block";
        videoElement.style.margin = "auto";   
        mainImage.appendChild(videoElement);
    }

    // Update the "Project Link" button link based on the project
    const projectLinkButton = document.getElementById("project-link-button");
    if (projectLinkButton) {
        let link;
        if (currentProjectIndex === 0) {
            link = "https://github.com/k3vinszn/Ying-Yang1";
        } else if (currentProjectIndex === 1) {
            link = "https://github.com/k3vinszn/DualityOfInsanity";
        } else if (currentProjectIndex === 2) {
            link = "https://github.com/Votexdcx/HeadsOrDeath";
        }

        // Update the button click behavior to open the corresponding link
        projectLinkButton.onclick = () => window.open(link, "_blank");
    }

    // Update the "Game Link" button link based on the project
    const gamelinkbutton = document.getElementById("game-link-button");
    if (gamelinkbutton) {
        let gamelink;
        if (currentProjectIndex === 0) {
            gamelink = "https://ghostcyder.itch.io/yin-yang?secret=pqa41VKpNwUJuX3Tb5nDxQh6Dw";
        } else if (currentProjectIndex === 1) {
            gamelink = "https://sabrinams.itch.io/duality-of-insanity";
        } else if (currentProjectIndex === 2) {
            gamelink = "https://aleksandrosp38.itch.io/heads-or-death";
        }

        // Update the button click behavior to open the corresponding link
        gamelinkbutton.onclick = () => window.open(gamelink, "_blank");
    }
});





// Add click event listener to the Contact button
contactButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetContent();
    mainText.innerHTML = `<p>alexandrepacheco2000@hotmail.com</p>`;

    // Show social links
    socialLinks.style.display = "flex";

    // Check if the GitHub link is already created to prevent duplicates
    if (!document.getElementById("github-link")) {
        const githubLink = document.createElement("a");
        githubLink.id = "github-link";
        githubLink.href = "https://github.com/AleksandrosP38?tab=repositories";
        githubLink.target = "_blank"; // Open in a new tab
        const githubIcon = document.createElement("i");
        githubIcon.classList.add("fa-brands", "fa-github");
        githubLink.appendChild(githubIcon);
        socialLinks.appendChild(githubLink);
    }
});

// Add click event listeners to all other buttons
otherButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Hide the social links when any other button is clicked
        socialLinks.style.display = "none";
    });
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
