export const SecretSymbol = Symbol("secret_symbol");

export class ExampleClass {
  descr = "blahdescr";
  static staticDescrUpper = "BLAHDESCR";

  [SecretSymbol] = 6;
  static [SecretSymbol] = 9;

  #privateVar = 12;
  static #privateStaticVar = 144;

  constructor(descr = undefined) {
    if (!descr) return;
    this.descr = descr;
  }

  toString() {
    return `${this.descr}`;
  }
  static staticMethod() {
    return 12;
  }

  get getterMethod() {
    return "getter method";
  }
  static get staticGetterMethod() {
    return "static getter method";
  }

  set setterMethod(val) {
    this.#privateVar = val;
  }
  static set staticSetterMethod(val) {
    this.#privateStaticVar = val;
  }

  [SecretSymbol]() {
    return "hidden instance";
  }
  static [SecretSymbol]() {
    return "hidden static";
  }

  #privMethod() {
    return this.#privateVar;
  }
  static #privStaticMethod() {
    return this.#privateStaticVar;
  }
}

export default ExampleClass;
