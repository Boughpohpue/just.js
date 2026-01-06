/* Just is this */
export class Is {
  static thisTrue(q) {
    return q === true;
  }
  static thisFalse(q) {
    return q === false;
  }
  static thisNull(q) {
    return q === null;
  }
  static thisUndefined(q) {
    return typeof q === "undefined";
  }
  static thisBoolean(q) {
    return typeof q === "boolean";
  }
  static thisNumber(q) {
    return typeof q === "number";
  }
  static thisBigInt(q) {
    return typeof q === "bigint";
  }
  static thisString(q) {
    return typeof q === "string";
  }
  static thisSymbol(q) {
    return typeof q === "symbol";
  }
  static thisObject(q) {
    return typeof q === "object";
  }
  static thisFunction(q) {
    return typeof q === "function";
  }
  static thisNothing(q) {
    return Is.thisNull(q) || Is.thisUndefined(q);
  }
  static thisSomething(q) {
    return !Is.thisNothing(q);
  }
  static thisAnything(q) {
    return !Is.thisNothing(q);
  }
  static thisDefined(q) {
    return !Is.thisUndefined(q);
  }
  static thisArray(q) {
    return Array.isArray(q);
  }
  static thisEmpty(q) {
    return Is.thisNothing(q) || ((Is.thisString(q) || Is.thisArray(q)) && q.length == 0);
  }
  static thisEmptyArray(q) {
    return Is.thisArray(q) && q.length == 0;
  }
  static thisClass(q) {
    return Is.thisFunction(q) && q.toString().startsWith("class ");
  }
  static thisGetter(q, propertyName) {
    try {
      return !!Object.getOwnPropertyDescriptor(q, propertyName)["get"];
    } catch (e) {
      return false;
    }
  }
  static thisSetter(q, propertyName) {
    try {
      return !!Object.getOwnPropertyDescriptor(q, propertyName)["set"];
    } catch (e) {
      return false;
    }
  }
}

export default Is;
