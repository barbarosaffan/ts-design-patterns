interface Cloneable {
  clone(): this;
}

class Shape implements Cloneable {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public clone(): this {
    // Create a new instance of the same class
    const clone = new (this.constructor as any)(this.x, this.y);

    // Copy over any non-primitive properties
    Object.assign(clone, this);

    return clone;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(x: number, y: number, radius: number) {
    super(x, y);
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }

  public setRadius(radius: number): void {
    this.radius = radius;
  }
}

// Usage example
const circle1 = new Circle(0, 0, 10);
const circle2 = circle1.clone();

console.log(circle1.getRadius()); // 10
console.log(circle2.getRadius()); // 10

// Changing the radius of circle2 does not affect circle1
circle2.setRadius(20);
console.log(circle1.getRadius()); // 10
console.log(circle2.getRadius()); // 20
