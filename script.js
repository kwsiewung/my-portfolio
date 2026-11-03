// Typing animation
const words = ["Student", "Web Developer", "Programmer"];
let wordIndex = 0;
let letterIndex = 0;
const typingText = document.getElementById("typingText");

function typeWord() {
    const word = words[wordIndex];
    typingText.textContent = word.slice(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex < word.length) {
        setTimeout(typeWord, 120);
    } else {
        setTimeout(function () {
            letterIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
            typeWord();
        }, 1500);
    }
}

typeWord();

// =========================
// PROJECT GALLERY
// =========================

// Project information
const projects = [
    {
        title: "Personal Portfolio",
        images: [
            "images/portfolio1.png",
            "images/portfolio2.png"
        ],
        description: [
            "This is my personal portfolio website, developed using HTML, CSS, and JavaScript. The website introduces my educational background, technical skills, working experience, and projects.",

            "I designed the website with a simple dark theme and a responsive layout to make it easy for visitors to navigate and explore my work.",

            "Through this project, I practised frontend development, CSS styling, JavaScript interactions, and responsive web design."
        ],
        tech: "HTML, CSS, JavaScript"
    },

    {
        title: "SDG 14 - Life Below Water Quiz App",
        images: [
            "images/java1.jpg",
            "images/java2.jpg",
            "images/java3.jpg",
            "images/java4.jpg",
            "images/java5.jpg"
        ],
        description: [
            "This is an interactive educational quiz application developed using Java as part of our university coursework. The application focuses on Sustainable Development Goal 14 (Life Below Water), aiming to raise awareness about marine conservation and environmental protection.",

            "We designed a user-friendly interface with learning modules that include educational content and images. These modules allow users to learn more about marine life and environmental issues before attempting the quizzes.",

            "Users can test their knowledge through multiple-choice and true/false questions. The application also includes a high-score feature that allows users to view their quiz results.",

            "Through this project, we gained practical experience in Java programming, GUI design, event handling, and object-oriented programming."
        ],
        tech: "Java, Java Swing, GUI Development, OOP"
    },

    {
        title: "Sarawak Heritage Online Auction (SHAA)",
        images: [
            "images/shaa1.jpg",
            "images/shaa2.jpg",
            "images/shaa3.jpg"
        ],
        description: [
            "Sarawak Heritage Online Auction (SHAA) is a web-based bidding system developed as a group project for our Database course at UNIMAS. The platform aims to promote Sarawak's cultural heritage by allowing users to buy and sell traditional artifacts through online auctions.",

            "We developed a database-driven system that includes buyer and seller management, auction listings, bidding history, order tracking, payments, and report generation. These features help users manage auction activities and view important transaction information.",

            "Using MySQL and phpMyAdmin, we designed and managed a relational database consisting of 11 interconnected tables. The database organizes user information, auction items, bidding records, transactions, and other related data.",

            "Through this project, we gained practical experience in database design, SQL queries, data relationships, and integrating databases with web applications."
        ],
        tech: "HTML, CSS, PHP, MySQL, SQL, phpMyAdmin, XAMPP"
    },

    {
        title: "Stray Animal Rescue – 2D Adventure Game",
        images: [
            "images/unity1.jpg",
            "images/unity2.jpg",
            "images/unity3.jpg"
        ],
        description: [
            "Stray Animal Rescue is a 2D adventure and puzzle-solving game developed as a group project using Unity. The game aims to raise awareness about stray animal welfare through three interactive levels.",

            "In Level 1, players explore an alley, collect useful tools, and solve puzzles to rescue a trapped cat. Level 2 introduces a top-down puzzle challenge where players move wooden boxes and obstacles to create a safe path for the cat.",

            "In Level 3, players experience a side-scrolling adventure, following their rescued cat companion to find and help another stray animal.",

            "Through this project, we explored game design, level progression, character movement, object interactions, puzzle mechanics, and user interface design while creating an enjoyable and meaningful gaming experience."
        ],
        tech: "Unity, C#, 2D Game Development, Level Design, UI/UX Design"
    },

    {
        title: "Deep Sea Cleaner",
        images: [
            "images/deepseacleaner2.jpg",
            "images/deepseacleaner1.jpg"
        ],
        description: [
            "Deep Sea Cleaner is a 2D ocean conservation game developed as a group project for our Computer Graphics course at UNIMAS. The game was built using C++ with OpenGL and GLUT to create an interactive underwater environment.",

            "Players control a submarine to collect underwater trash and protect marine life. The game features two levels with different challenges, encouraging players to complete their cleaning missions while avoiding obstacles.",

            "We implemented several gameplay features, including a scoring system, collision detection, animations, and sound effects to make the game more interactive and engaging.",

            "Through this project, we gained practical experience in 2D graphics rendering, game mechanics, and interactive game development."
        ],
        tech: "C++, OpenGL, GLUT, SDL2, SDL_mixer, Visual Studio"
    },

    {
        title: "Python GUI Applications",
        images: [
            "images/python1.jpg",
            "images/python2.jpg"
        ],
        description: [
            "These are two simple desktop applications developed using Python as part of our university coursework. Both applications focus on creating interactive graphical user interfaces and applying basic programming concepts.",

            "The first application, Smart Student Team Collaboration Platform, provides a basic interface for creating teams, assigning tasks, and viewing reports. It was designed to help students organize their group activities and manage teamwork more easily.",

            "The second application, Group String Encoder, allows users to enter text and generate encoded results using a character-shifting algorithm. This application demonstrates basic string manipulation and user input processing.",

            "Through these projects, we gained practical experience in Python programming, Tkinter GUI development, event handling, string manipulation, and building interactive desktop applications."
        ],
        tech: "Python, Tkinter, GUI Development, String Manipulation"
    }
];


// Variables
let currentProject = 0;
let currentImage = 0;

const popup = document.getElementById("projectPopup");

// Open project popup
function openProject(index) {
    currentProject = index;
    currentImage = 0;

    document.getElementById("popupTitle").textContent =
        projects[index].title;

    // Display project description in paragraphs
    const descriptionBox = document.getElementById("popupDescription");

    // Clear previous description
    descriptionBox.innerHTML = "";

    // Get project description
    const descriptions = projects[index].description;

    // Create a paragraph for each description
    descriptions.forEach(function(text) {

        const paragraph = document.createElement("p");

        paragraph.textContent = text;

        descriptionBox.appendChild(paragraph);

    });

    document.getElementById("popupTech").textContent =
        "Technologies: " + projects[index].tech;

    showImage();
    popup.showModal();
}

// Display current image
function showImage() {
    const images = projects[currentProject].images;

    const popupImage = document.getElementById("popupImage");

    popupImage.src = images[currentImage];
    popupImage.alt = projects[currentProject].title +
        " screenshot " + (currentImage + 1);

    document.getElementById("imageCounter").textContent =
        (currentImage + 1) + " / " + images.length;
}

// Change image
function changeImage(direction) {
    const images = projects[currentProject].images;

    currentImage += direction;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();
}

// Close popup
function closeProject() {
    popup.close();
}

// ===============================
// INFINITE PROJECT CAROUSEL
// ===============================

const projectScroll = document.getElementById("projectScroll");

if (projectScroll) {

    // Get original project cards
    const originalCards = Array.from(
        projectScroll.querySelectorAll(".project-card")
    );

    // Create three copies of the project list
    // Previous | Original | Next
    const previousCards = originalCards.map(card => card.cloneNode(true));
    const nextCards = originalCards.map(card => card.cloneNode(true));

    // Add copies before and after original cards
    previousCards.forEach(card => {
        projectScroll.appendChild(card);
    });

    nextCards.forEach(card => {
        projectScroll.appendChild(card);
    });

    // Width of one full project set
    let setWidth = 0;

    function calculateWidth() {
        const firstCard = originalCards[0];

        if (!firstCard) return 0;

        const gap = parseFloat(
            getComputedStyle(projectScroll).gap
        ) || 0;

        return originalCards.length *
            (firstCard.getBoundingClientRect().width + gap);
    }

    function resetPosition() {
        setWidth = calculateWidth();
        projectScroll.scrollLeft = setWidth;
    }

    // Start in the middle copy
    resetPosition();

    // Infinite loop while scrolling
    projectScroll.addEventListener("scroll", function () {

        if (setWidth === 0) return;

        if (projectScroll.scrollLeft >= setWidth * 2) {
            projectScroll.scrollLeft -= setWidth;
        }

        if (projectScroll.scrollLeft < setWidth) {
            projectScroll.scrollLeft += setWidth;
        }

    });

    // Recalculate on window resize
    window.addEventListener("resize", resetPosition);
}

function scrollProjects(direction) {

    const projectScroll = document.getElementById("projectScroll");

    const card = projectScroll.querySelector(".project-card");

    if (!card) return;

    const gap = parseFloat(
        getComputedStyle(projectScroll).gap
    ) || 0;

    const distance = card.getBoundingClientRect().width + gap;

    projectScroll.scrollBy({
        left: distance * direction,
        behavior: "smooth"
    });
}

// Live clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        "Current time: " + now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);


// Show back-to-top button after scrolling
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

