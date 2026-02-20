// 1. Listen for the 'play' event on the entire page
document.addEventListener('play', function(e) {
    // 2. Get every audio element on your website
    const allAudios = document.getElementsByTagName('audio');

    // 3. Loop through them all
    for (let i = 0; i < allAudios.length; i++) {
        // 4. If the audio is NOT the one we just clicked, pause it!
        if (allAudios[i] != e.target) {
            allAudios[i].pause();
        }
    }
}, true);