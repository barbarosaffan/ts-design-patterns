interface Component {
  operation(): void;
}

class Leaf implements Component {
  constructor(private name: string) {}

  public operation(): void {
    console.log(`Leaf ${this.name} is being operated.`);
  }
}

class Composite implements Component {
  private children: Component[] = [];

  public add(child: Component): void {
    this.children.push(child);
  }

  public remove(child: Component): void {
    const index = this.children.indexOf(child);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  public operation(): void {
    console.log("Composite is being operated.");
    for (const child of this.children) {
      child.operation();
    }
  }
}

// Example usage
const root = new Composite();

const branch1 = new Composite();
branch1.add(new Leaf("Leaf 1.1"));
branch1.add(new Leaf("Leaf 1.2"));

const branch2 = new Composite();
branch2.add(new Leaf("Leaf 2.1"));
branch2.add(new Leaf("Leaf 2.2"));

root.add(branch1);
root.add(branch2);

root.operation(); // outputs: "Composite is being operated.", "Leaf 1.1 is being operated.", "Leaf 1.2 is being operated.", "Leaf 2.1 is being operated.", "Leaf 2.2 is being operated."
