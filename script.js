document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('image-gallery');
    const loadButton = document.getElementById('load-images');

    // Unsplash API endpoint
    const unsplashURL = 'https://api.unsplash.com/photos/random?count=6&client_id=zybYJIoM_vctfGJhRR6nnlJvTVHS1OZ7JNJZF30Szks';

    // Function to fetch random images
    const fetchImages = async () => {
        try {
            const response = await fetch(unsplashURL);
            const images = await response.json();
            gallery.innerHTML = ''; // Clear gallery before loading new images
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.urls.small;
                imgElement.alt = image.alt_description || 'Unsplash Image';
                gallery.appendChild(imgElement);
            });
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    // Event listener for load button
    loadButton.addEventListener('click', fetchImages);

    // Initial load of images when the page loads
    fetchImages();
});
