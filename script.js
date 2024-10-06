const quotes = [
    "The best way to predict the future is to create it.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Whether you think you can, or you think you can’t – you’re right.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "If you really look closely, most overnight successes took a long time.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don’t be afraid to give up the good to go for the great."
];

const quoteText = document.getElementById("quoteText");
const generateQuoteBtn = document.getElementById("generateQuoteBtn");

generateQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});
