// #
// torcado - canvas {
//     position: absolute;
//     z - index: 1; /*Make higher if you want confetti over text*/
//     pointer - events: none;
// }

function startMusic() {

    var congratsAudio = new Audio(chrome.runtime.getURL("soundtrack1.mp3"));
    congratsAudio.play();
}