export class Enum {
  #value = undefined;
  get value() { return this.#value; }
  get valueType() { return typeof this.#value; }
  get name() { return this.constructor.getName(this); }

  constructor(value = undefined) {
    const _ctor = this.constructor;
    if (_ctor._sealed)
      throw new Error("An Enum instance can be created only inside the enum class!");
    if (value === null || value === undefined) return;
    for (const [name, instance] of Object.entries(_ctor)) {
      if (!(instance instanceof _ctor)) continue;
      if (instance.value === value)
        throw new Error("An Enum instance with the same value already exists!");
      if (instance.valueType && instance.valueType !== typeof value)
        throw new Error("An Enum value type must be consistent across the enum class!");
    }
    this.#value = value;
    Object.freeze(this);
  }

  static parse(e) {
    if (e === undefined || e === null) return;
    let valuesType = undefined;
    const upper = typeof e === "string" ? e.toUpperCase() : undefined;
    for (const [name, instance] of Object.entries(this)) {
      if (!(instance instanceof this)) continue;
      if (upper === name.toUpperCase()) return instance;
      if (instance.value === e) return instance;
      if (!valuesType && instance.valueType) valuesType = instance.valueType;
    }
    if (valuesType === typeof e) return e;
  }
  static ensure(e) {
    if (e === undefined || e === null) return;
    if (e instanceof this) return e;
    return this.parse(e);
  }
  static getValue(e, fallback = undefined) {
    const ensured = this.ensure(e) ?? this.ensure(fallback);
    return ensured instanceof this
      ? ensured.value
      : ensured;
  }
  static getName(e) {
    if (!(e instanceof this)) return;
    for (const [name, instance] of Object.entries(this))
      if (instance instanceof this && instance === e) return name;
  }
  static seal() {
    this._sealed = true;
    Object.freeze(this);
    Object.freeze(this.prototype);
  }
}

export default Enum;
