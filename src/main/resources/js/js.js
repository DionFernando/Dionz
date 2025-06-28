const thumbs = document.querySelectorAll('.thumbs img');
const mainImage = document.getElementById('mainImage');
const colorOptions = document.querySelectorAll('.color-option');
const price = document.getElementById("price");
const originalPrice = document.getElementById("originalPrice");

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImage.src = thumb.src;
        mainImage.alt = thumb.alt;
    });
});

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        const img = option.querySelector('img');
        mainImage.src = img.src;
        mainImage.alt = img.alt;

        thumbs.forEach(t => t.classList.remove('active'));
        thumbs.forEach(t => {
            if (t.src === img.src) t.classList.add('active');
        });

        price.textContent = `LKR ${option.dataset.price}.00`;
        originalPrice.textContent = `LKR ${parseFloat(option.dataset.original).toFixed(2)}`;
    });
});

let currentIndex = 0;
const updateMainImage = (index) => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');
    mainImage.src = thumbs[index].src;
    mainImage.alt = thumbs[index].alt;
};

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    updateMainImage(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbs.length;
    updateMainImage(currentIndex);
});

// Simplified Buy Now button - just open WhatsApp
document.getElementById("buyNowBtn").addEventListener("click", () => {
    const phone = "94767149543"; // Your WhatsApp number

    const productId = document.querySelector('.product-id').textContent.trim().replace('ID: ', '');
    const selectedColor = document.querySelector('.color-option.selected .color-label')?.textContent.trim() || "N/A";
    const qty = document.getElementById("qty").value;

    const message = `*Hello, I'm interested in purchasing the following item:*%0A%0A` +
        `*Product ID:* ${productId}%0A` +
        `*Color:* ${selectedColor}%0A` +
        `*Quantity:* ${qty}`;

    const whatsappURL = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappURL, "_blank");
});



