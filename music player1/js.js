// window.addEventListener('DOMContentLoaded', function() {
//     const lyricsContainer = document.querySelector('.lyrics-container');
//     const lyricsScroll = document.querySelector('.lyrics-scroll');

//     // Add your lyrics lines here
//     const lyricsLines = [
//         "Lyrics Line 1",
//         "Lyrics Line 2",
//         "Lyrics Line 3",
//         "Lyrics Line 4",
//         "Lyrics Line 5"
//     ];

//     // Create the lyrics elements and append them to the scrolling container
//     lyricsLines.forEach(function(line) {
//         const lyricsLine = document.createElement('div');
//         lyricsLine.classList.add('lyrics-line');
//         lyricsLine.textContent = line;
//         lyricsScroll.appendChild(lyricsLine);
//     });

//     // Adjust the animation duration based on the number of lyrics lines
//     const animationDuration = lyricsLines.length * 5 + 's';
//     lyricsScroll.style.animationDuration = animationDuration;
// });