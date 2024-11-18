// Array of words to display
const words = ["Web developer", "Designer", "Problem Solver", "Freelancer", "Team Player"];

// Reference to the span element
const dynamicText = document.getElementById("dynamic-text");

// Typing effect variables
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Typing speed in milliseconds
const deletingSpeed = 100; // Deleting speed in milliseconds
const delayBetweenWords = 2000; // Delay before typing the next word

// Function to handle typing effect
function typeWords() {
    // Get the current word
    const currentWord = words[wordIndex];

    // Update the text content based on typing or deleting
    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex--);
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex++);
    }

    // Check if word is fully typed or deleted
    if (!isDeleting && charIndex === currentWord.length) {
        // Pause before starting to delete
        setTimeout(() => (isDeleting = true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word after deleting
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    // Call the function again with appropriate speed
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWords, speed);
}

// Start the typing effect
typeWords();
