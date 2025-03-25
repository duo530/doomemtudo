document.querySelectorAll('video').forEach(video => {
    let iframe = document.createElement('iframe');
    iframe.src = "https://dos.zone/doom-dec-1993/";
    iframe.width = video.clientWidth;
    iframe.height = video.clientHeight;
    iframe.style.border = "none";
    
    video.parentNode.replaceChild(iframe, video);
});
