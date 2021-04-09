import Canvas from "Framework/canvas";
import p5 from "p5";

export default class Game extends Canvas {
  static LENGTH = 700;

  private x = 0;
  private velocity = 10;
  private squareLength = Game.LENGTH * 0.2;

  setup() {
    this.createCanvas(Game.LENGTH, Game.LENGTH);
    this.frameRate(60);

    this.background(100);
    this.noStroke();
  }

  draw() {
    this.background(100);
    this.fill(245, 199, 57);
    this.rect(
      this.x,
      Game.LENGTH / 2 - this.squareLength / 2,
      this.squareLength,
      this.squareLength,
      30
    );
    this.x += this.velocity;
    if (this.x > Game.LENGTH + this.squareLength) {
      this.x = -this.squareLength;
    }
  }
}
