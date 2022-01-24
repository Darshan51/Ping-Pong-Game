import Ball from "./ball1.js"
import Paddle from "./paddle.js"
import paddle from "./paddle1.js";

const ball = new Ball(document.getElementById("ball"));
const PlayerPaddle = new Paddle(document.getElementById("player-paddle"))
const ComputorPaddle = new Paddle(document.getElementById("computer-paddle"))
const PlayerScore = document.getElementById("player-score")
const ComputerScore = document.getElementById("computer-score")
let lastTime

function update(time) {
    // console.log("hellow");
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta, [PlayerPaddle.rect(), ComputorPaddle.rect()]);

        ComputorPaddle.update(delta, ball.y)
            //  PlayerPaddle.update(delta, ball.y)
    }
    lastTime = time;
    window.requestAnimationFrame(update)
    if (isLose()) handleLose();
}

function isLose() {
    return ball.rect().left <= 0 || ball.rect().right >= window.innerWidth
        // const rect = ball.rect()
        // return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
    const rect = ball.rect();
    if (rect.right >= window.innerWidth) {
        PlayerScore.textContent = parseInt(PlayerScore.textContent) + 1
    } else {
        ComputerScore.textContent = parseInt(ComputerScore.textContent) + 1
    }
    ball.reset();
    ComputorPaddle.reset()
}
document.addEventListener("mousemove", e => {
    var temp = e.clientY; // e.y=temp
    PlayerPaddle.position = (e.y / window.innerHeight) * 120;
})
window.requestAnimationFrame(update);