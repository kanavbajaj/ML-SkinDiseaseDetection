const video = document.getElementById('scanner-video');
const closeScannerBtn = document.getElementById('close-scanner');
const permanentCloseScannerBtn = document.getElementById('permanent-close-scanner');

function startScanner() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
                video.style.display = 'block';
                closeScannerBtn.style.display = 'block';
            })
            .catch(function (error) {
                console.error('Error accessing camera:', error);
            });
    } else {
        alert('Your browser does not support camera access. Please use a modern browser.');
    }
}
function closeScanner() {
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
    
    video.srcObject = null;
    video.style.display = 'none';
}

function uploadPicture() {
    const input = document.getElementById('image-input');
    const file = input.files[0];

    if (file) {
        alert('File uploaded successfully!');
    } else {
        alert('Please select a file to upload.');
    }
}

function permanentCloseScanner() {
    closeScanner();
}
