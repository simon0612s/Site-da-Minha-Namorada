document.addEventListener("DOMContentLoaded", () => {
    fetch("components/music-player.html")
        .then(res => {
            if (!res.ok) throw new Error("HTML do player não encontrado");
            return res.text();
        })
        .then(html => {
            document.getElementById("musicPlayerContainer").innerHTML = html;

            const audio = document.getElementById("bgMusic");
            const btn = document.getElementById("musicToggle");

            btn.addEventListener("click", () => {
                if (audio.paused) {
                    audio.play();
                    btn.classList.add("playing");
                } else {
                    audio.pause();
                    btn.classList.remove("playing");
                }
            });
        })
        .catch(err => console.error(err));
});
