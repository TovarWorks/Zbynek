    // Get elements
    const openPopup = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    // Show popup when image is clicked
    openPopup.addEventListener('click', () => {
        popup.style.display = 'flex';
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