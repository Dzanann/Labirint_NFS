document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("redlight");
    audio.addEventListener("canplaythrough", function() {
        audio.play();
    });
    setTimeout(function() {
        audio.play();
    }, 10);
});	