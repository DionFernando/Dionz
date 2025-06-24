document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.products-grid'); // or use #productsGrid if you added the ID
    if (!grid) return;

    // Get all product cards as an array
    const cards = Array.from(grid.children);

    // Shuffle function (Fisher-Yates shuffle)
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // Swap
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Shuffle cards array
    const shuffledCards = shuffle(cards);

    // Remove existing cards
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // Append shuffled cards back
    shuffledCards.forEach(card => {
        grid.appendChild(card);
    });
});