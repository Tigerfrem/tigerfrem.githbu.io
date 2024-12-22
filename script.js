// Array of messages to type out one by one
const messages = [
    "Initializing...",
    "Loading resources...",
    "Ready to hack the world!"
];

const consoleElement = document.getElementById("console");
const clickButton = document.getElementById("clickButton");

let messageIndex = 0;
let charIndex = 0;
let typingSpeed = 100;  // Speed of typing effect (ms)
let messageTimeout = 2000; // Delay between messages (ms)

function typeMessage() {
    if (messageIndex < messages.length) {
        let message = messages[messageIndex];
        let typedText = message.slice(0, charIndex);

        consoleElement.textContent = typedText;

        if (charIndex < message.length) {
            charIndex++;
            setTimeout(typeMessage, typingSpeed);
        } else {
            messageIndex++;
            charIndex = 0;
            setTimeout(typeMessage, messageTimeout); // Wait before typing next message
        }
    } else {
        // After all messages are typed, hide the cursor and show the button
        document.getElementById("welcome-text").style.borderRight = "none"; // Hide cursor
        clickButton.style.opacity = 1; // Make the button appear
    }
}

// Start typing the first message
typeMessage();
