import P5 from 'p5';

export default class BaseGame extends P5 {
    constructor(selector: string = 'canvas#game') {
        const node = document.querySelector(selector) as HTMLElement;
        super(function () {}, node);
    }
    setup() {
    }
}