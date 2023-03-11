class Singleton {
  private static instance: Singleton;

  private constructor() {
    // prevent new instances from being created outside of this class
  }

  public static createInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public singletonTest(): void {
    console.log("Singleton!");
  }
}

// Usage example
const singleton1 = Singleton.createInstance();
const singleton2 = Singleton.createInstance();

console.log(singleton1 === singleton2);

singleton1.singletonTest();
singleton2.singletonTest();
