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
        // Add each message below the previous one, keeping the console growing
        let message = messages[messageIndex];
        
        if (charIndex < message.length) {
            consoleElement.innerHTML += message.charAt(charIndex);  // Append each character to the console
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
