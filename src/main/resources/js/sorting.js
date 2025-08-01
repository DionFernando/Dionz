document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".products-grid");
    const cards = Array.from(grid.children);

    // Shuffle cards initially
    const shuffled = cards.sort(() => Math.random() - 0.5);
    grid.innerHTML = '';
    shuffled.forEach((card) => grid.appendChild(card));

    // Sort handler
    const sortSelect = document.getElementById("sort-select");
    sortSelect.addEventListener("change", (e) => {
        const value = e.target.value;
        let sorted = [...cards];

        if (value === "low-high") {
            sorted.sort((a, b) => {
                const aPrice = parseFloat(a.querySelector(".current").textContent.replace(/,/g, ""));
                const bPrice = parseFloat(b.querySelector(".current").textContent.replace(/,/g, ""));
                return aPrice - bPrice;
            });
        } else if (value === "high-low") {
            sorted.sort((a, b) => {
                const aPrice = parseFloat(a.querySelector(".current").textContent.replace(/,/g, ""));
                const bPrice = parseFloat(b.querySelector(".current").textContent.replace(/,/g, ""));
                return bPrice - aPrice;
            });
        }

        grid.innerHTML = '';
        sorted.forEach(card => grid.appendChild(card));
    });
});