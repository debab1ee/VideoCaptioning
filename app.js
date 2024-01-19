function uploadVideo()
{
    const videoInput = document.getElementById('videoInput');

    if(videoInput.isDefaultNamespace.length > 0)
    {
        const uploadedVideo = videoInput.files[0];
        alert('Video "${uploadedVideo.name}" uploaded successfully!');
    }
    else
    {
        alert('Please select a video to upload.')
    }
}