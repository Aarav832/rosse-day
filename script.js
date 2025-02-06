const quotes = [
    "Love is the flower you've got to let grow 🌱",
    "A rose by any other name would smell as sweet 🌹",
    "In the garden of love, you're my rarest bloom 🌷",
    "Our love grows like roses - beautiful and strong 💖",
    "Every rose in the world could never compare to you 🌹",
    "Love is the poetry of the senses 💐",
    "Your love colors my world like a thousand petals 🌈",
    "Grow old with me, the best is yet to be 🌼",
    "A flower cannot blossom without sunshine, and I cannot live without you ☀️",
    "You're the rose that makes my heart bloom 💞"
];

let currentQuote = 0;
const quoteElement = document.getElementById('quote');

function showQuote() {
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.textContent = quotes[currentQuote];
        currentQuote = (currentQuote + 1) % quotes.length;
        quoteElement.style.opacity = 1;
    }, 500);
}

function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = '🌸';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    petal.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.querySelector('.petals').appendChild(petal);
    
    setTimeout(() => petal.remove(), 5000);
}

function createFlowerStorm() {
    for(let i = 0; i < 50; i++) {
        setTimeout(createPetal, i * 100);
    }
}

function showSecretMessage() {
    const message = document.getElementById('secretMessage');
    message.style.display = 'block';
    createFlowerStorm();
    setTimeout(() => message.style.display = 'none', 3000);
}

function showPersonalMessage() {
    const name = prompt("Enter your sweet name ❤️:");
    if(name) {
        alert(`Dear ${name},\n\nYou make every petal of my heart bloom with joy!\nForever Yours,\nYour Secret Admirer 🌹`);
    }
}

// Initial setup
showQuote();
setInterval(showQuote, 5000);
setInterval(createPetal, 2000);

// Add some initial petals
for(let i = 0; i < 10; i++) {
    setTimeout(createPetal, i * 300);
}