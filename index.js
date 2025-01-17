const popupDescription = document.getElementById('popupDescription');
const popupImagesContainer = document.getElementById('popupImagesContainer');
const closePopup = document.getElementById('closePopup');
const images = document.querySelectorAll('.container img');

// Show popup when an image is clicked
images.forEach(image => {
    image.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupTitle.textContent = image.dataset.popupTitle;
        popupDescription.textContent = image.dataset.popupContent;

        // Clear previous images
        popupImagesContainer.innerHTML = '';

        // Add new images to the popup
        const imageUrls = image.dataset.popupImages.split(',');
        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            /*img.classList.add('rounded-lg', 'w-full');*/
            popupImagesContainer.appendChild(img);
        });
    });
});

// Close popup when button is clicked
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close popup when clicking outside the popup content
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});