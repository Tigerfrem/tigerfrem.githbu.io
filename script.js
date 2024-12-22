// Array of messages to type out one by one
const messages = [
    "Initializing...",
    "Loading resources...",
    "Ready to hack the world!"
];

const consoleElement = document.getElementById("console");
const clickButton = document.getElementById("clickButton");
const welcomeText = document.getElementById("welcome-text");

let messageIndex = 0;
let charIndex = 0;
let typingSpeed = 100;  // Speed of typing effect (ms)
let messageTimeout = 2000; // Delay between messages (ms)

// Function to type each message character by character
function typeMessage() {
    if (messageIndex === 0) {
        // Handle typing the "Welcome to my world" message first
        if (charIndex < "Welcome to my world".length) {
            welcomeText.textContent = "Welcome to my world".slice(0, charIndex + 1);
            charIndex++;
            setTimeout(typeMessage, typingSpeed);
        } else {
            // Once the "Welcome to my world" message is fully typed, hide the cursor
            welcomeText.style.borderRight = "none";
            messageIndex++;
            charIndex = 0;
            setTimeout(typeMessage, messageTimeout); // Wait before typing the next message
        }
    } else if (messageIndex < messages.length) {
        // Handle typing the console messages one by one
        let message = messages[messageIndex];
        let typedText = message.slice(0, charIndex);

        // Clear the previous message to avoid overwriting
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
        // After all messages are typed, show the button
        setTimeout(() => {
            clickButton.style.opacity = 1; // Make the button appear
        }, messageTimeout);
    }
}

// Start typing the first message
typeMessage();
