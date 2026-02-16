
/* Just a nameof */
export class Name {
  static of(o) {
    if (o === undefined || o === null) {
      return o;
    }
    let name = undefined;
    try {
      if (typeof o === "object") {
        name = o.name;
        if (name === undefined) {
          let cn = o.constructor.name;
          if (cn !== "Object") {
            name = cn;
          }
        }
        if (name === undefined) {
          for (let prop in o) {
            if (o.hasOwnProperty(prop)) {
              name = prop;
              break;
            }
          }
        }
      } else if (typeof o === "function") {
        name = Name.of(o.prototype);
        if (name === undefined) {
          let body = o.toString();
          let head = body.substr(0, Math.min(body.indexOf("("), body.indexOf("{"))).trim();
          let parts = head.split(" ");
          name = parts[parts.length - 1];
        }
      }
    } catch (e) {}
    return name;
  }
}

export function nameof(o) {
  return Name.of(o);
}

export default nameof;
