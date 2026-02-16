
/* Just a reflector */
export class Reflector {
  static getMethods = (i) => this.#filterDescriptors(i, desc => this.#isMethod(desc));
  static getGetters = (i) => this.#filterDescriptors(i, desc => this.#isGetter(desc));
  static getSetters = (i) => this.#filterDescriptors(i, desc => this.#isSetter(desc));
  static getProperties = (i) => this.#filterDescriptors(i, desc => this.#isProperty(desc), false);
  static reflect(target) {
    if (target == null) throw new Error("Cannot reflect null.");
    const instance = this.#getInstance(target);
    const ctor = this.#getConstructor(target);
    return {
      typeName: ctor?.name ?? null,
      instanceProperties: this.getProperties(instance),
      instanceMethods: this.getMethods(instance),
      instanceGetters: this.getGetters(instance),
      instanceSetters: this.getSetters(instance),
      staticProperties: this.getProperties(ctor),
      staticMethods: this.getMethods(ctor),
      staticGetters: this.getGetters(ctor),
      staticSetters: this.getSetters(ctor)
    };
  }

  static #isFunction = (i) => typeof i === "function";
  static #isInstance = (i) => i && typeof i === "object";
  static #getInstance = (i) => this.#isInstance(i) ? i : null;
  static #getConstructor = (i) => this.#isFunction(i) ? i : i.constructor;
  static #isGetter = (d) => !!d.get;
  static #isSetter = (d) => !!d.set;
  static #isMethod = (d) => this.#isFunction(d.value);
  static #isProperty = (d) => !(this.#isMethod(d) || this.#isGetter(d) || this.#isSetter(d));
  static #isInternalKey = (k) => ["constructor", "prototype", "length", "name", "arguments", "caller"].includes(k);
  static #filterDescriptors(item, predicate, forMethods = true) {
    if (!item) return [];
    const descriptors = this.#isInstance(item) && forMethods
      ? Object.getOwnPropertyDescriptors(this.#getConstructor(item).prototype)
      : Object.getOwnPropertyDescriptors(item);
    return Object.entries(descriptors)
      .filter(([key, desc]) => !this.#isInternalKey(key) && predicate(desc))
      .map(([key]) => key);
  }
}

export default Reflector;
