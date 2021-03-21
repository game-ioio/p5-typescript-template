import P5 from "p5";

export default class Canvas extends P5 {
  constructor(selector: string = "div#game") {
    const node = document.querySelector(selector) as HTMLElement;
    super(function () {}, node);
  }
}
