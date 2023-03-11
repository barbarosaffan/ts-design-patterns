// Define an interface for creating objects
interface Creator {
  factoryMethod(): Product;
}

// Define an interface for the product
interface Product {
  operation(): number;
}

// Concrete product implementation
class ConcreteProduct implements Product {
  operation(): number {
    return 31;
  }
}

// Concrete creator implementation
class ConcreteCreator implements Creator {
  factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

// Usage example
const creator: Creator = new ConcreteCreator();
const product: Product = creator.factoryMethod();
console.log(product.operation());
