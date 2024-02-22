async function initCamera() {
    const videoElement = document.createElement('video');
    videoElement.width = 640;
    videoElement.height = 480;
    document.getElementById('camera-feed').appendChild(videoElement);

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
    videoElement.play();

    let cap = new cv.VideoCapture(videoElement);
    const fps = 30;
    setInterval(() => {
        let frame = new cv.Mat(videoElement.height, videoElement.width, cv.CV_8UC4);
        cap.read(frame);
        cv.imshow('camera-feed', frame);
        frame.delete();
    }, 1000 / fps);
}

// Call the function to initialize camera feed when the page loads
window.onload = initCamera;
