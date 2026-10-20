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

// Live clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        "Current time: " + now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

window.addEventListener("scroll", checkSkills);
checkSkills();

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

