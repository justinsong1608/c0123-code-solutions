/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  print() {
    return `${super.print()} Width: ${this.width}`;
  }
}

const square = new Square(4);
console.log(square.print());
