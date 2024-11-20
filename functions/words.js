// Array of words to display
const words = [ "Designer", "Problem Solver", "Freelancer", "Full-Stack Developer", "Team Player"];
const dynamicText = document.getElementById("dynamic-text");


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; 
const deletingSpeed = 100; 
const delayBetweenWords = 2000; 

// Function to handle typing effect
function typeWords() {
    const currentWord = words[wordIndex];

    // Update the text content based on typing or deleting
    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex--);
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex++);
    }

    // Check if word is fully typed or deleted
    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    // Call the function again with appropriate speed
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWords, speed);
}
typeWords();
