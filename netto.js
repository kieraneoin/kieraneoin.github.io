const viewer = document.getElementById('image-viewer');
const fullImage = document.getElementById('full-image');
const closeButton = document.querySelector('.close-viewer');
const images = document.querySelectorAll('td img');

function closeViewer() {
    viewer.hidden = true;
    fullImage.src = '';
}

images.forEach((image) => {
    image.addEventListener('click', () => {
        fullImage.src = image.src;
        fullImage.alt = image.alt;
        viewer.hidden = false;
    });
});

closeButton.addEventListener('click', closeViewer);
viewer.addEventListener('click', (event) => {
    if (event.target === viewer) {
        closeViewer();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeViewer();
    }
});
