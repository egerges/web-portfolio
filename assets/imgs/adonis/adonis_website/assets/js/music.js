document.addEventListener("DOMContentLoaded", () => {
    Array.from(document.getElementsByClassName("album-song-list-items"))
    .forEach(element => {
        element.addEventListener('click', () => {
            var x = document.getElementById("music-player");

            x.setAttribute("src","./assets/songs/" + element.getAttribute("song") + ".mp4");

            x.setAttribute("controls", "none");
            x.style.visibility = "hidden";
            document.body.appendChild(x);

            document.getElementById("player-img").setAttribute("src", "./assets/img/" + element.getAttribute("song") + ".jpeg");
            document.getElementById("player-title").innerText = capitalize(element.getAttribute("song"));

            document.getElementById("replay").addEventListener("click", () => {
                x.currentTime = 0;
                x.play();
            });

            document.getElementById("pause").addEventListener("click", () => {
                x.pause();
            });

            document.getElementById("play").addEventListener("click", () => {
                x.play();
            });

            x.play();
        });
    });
});

function capitalize(txt) {
    const arr = txt.split("-");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    return arr.join(" ");;
}