// Function to open modal and display kitten images
function openModal(kitten) {
    const modal = document.getElementById('modal');
    const modalImages = document.getElementById('modal-images');

    // Clear existing images
    modalImages.innerHTML = '';

    // Array of images for each kitten
    const images = {
        ina: ['images/IMG20241019113953-01.jpeg','images/ina.jpeg','images/sada1.jpeg','images/sada2.jpeg', 'images/IMG20241019135320-01.jpeg', 'images/IMG20241019135232-01.jpeg'],
        mina: ['images/mina1.jpeg','images/mina2.jpeg','images/mina3.jpeg','images/mina4.jpeg','images/mina5.jpeg','images/mina6.jpeg','images/mina7.jpeg','images/mina8.jpeg','images/mina9.jpeg','images/mina10.jpeg',],
        dika: ['images/dika1.jpeg','images/dika2.jpeg','images/dika3.jpeg','images/dika4.jpeg','images/dika5.jpeg','images/dika6.jpeg',]
    };

    // Add images to modal
    images[kitten].forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `${kitten} image`;
        imgElement.classList.add('modal-image'); // Add a class for styling
        modalImages.appendChild(imgElement);
    });

    // Show modal with transition
    modal.classList.add('visible');
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('visible');
}



// Array of video sources
// Array of video sources
const videos = [
    {
        src: "https://www.youtube.com/embed/YrenV9_8SF4", // First YouTube embed link
        title: "Kittens on YouTube 1"
    },
    {
        src: "https://www.youtube.com/embed/0Th4fWzipHE", // Second YouTube embed link
        title: "Kittens on YouTube 2"
    },
    {
        src: "https://www.youtube.com/watch?v=HPNnVwPqJgo", // Second YouTube embed link
        title: "Kittens on YouTube 2"
    }

];

let currentVideoIndex = 0;

// Function to load and play the video
function loadVideo(index) {
    const videoPlayer = document.getElementById('video-player');

    // Load the YouTube embed link
    videoPlayer.src = videos[index].src;
}

// Initialize the video player with the first video
loadVideo(currentVideoIndex);

// Function to change video (next/previous)
function changeVideo(direction) {
    currentVideoIndex += direction;

    // Wrap around the video index if it goes out of bounds
    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
    } else if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    }

    loadVideo(currentVideoIndex);
}

// Add event listeners for next/previous buttons
document.getElementById('next-video').addEventListener('click', () => changeVideo(1));
document.getElementById('prev-video').addEventListener('click', () => changeVideo(-1));
