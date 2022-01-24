const speed = 0.008
export default class paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
        this.reset();
    }
    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))

    }
    set position(value) {

        this.paddleElem.style.setProperty("--position", value)
    }
    reset() {
        this.position = 50;
    }
    rect() {
        return this.paddleElem.getBoundingClientRect();
    }
    update(delta, ballHeight) {
        this.position += delta * (ballHeight - this.position) * speed;

    }
}