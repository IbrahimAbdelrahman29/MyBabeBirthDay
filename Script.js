function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    document.getElementById("balloons-container").appendChild(balloon);

    const colors = ["#ff4757", "#1e90ff", "#2ed573", "#ffa502", "#3742fa"];
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = Math.random() * 3 + 2 + "s";

    balloon.addEventListener("animationend", () => {
        balloon.remove();
        const pop = document.createElement("div");
        pop.classList.add("pop");
        pop.style.left = balloon.style.left;
        document.body.appendChild(pop);
        setTimeout(() => pop.remove(), 500);
    });

    setTimeout(() => {
        balloon.remove();
    }, 4000);
}

setInterval(createBalloon, 300);

function goToHome() {
    window.location.href = "home.html";
}