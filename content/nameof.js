
/* Just a nameof */
export class Name {
  static of(o) {
    if (o == undefined || o == null) {
      return o;
    }

    let name = undefined;

    try {
      if (typeof o === "object") {
        name = o.name;
        if (name === undefined) {
          for (let prop in o) {
            if (o.hasOwnProperty(prop)) {
              name = prop;
              break;
            }
          }
        }
        if (name === undefined) {
          name = o.constructor.name;
        }
      } else if (typeof o === "function") {
        let body = o.toString();
        let head = body.substr(0, Math.min(body.indexOf("("), body.indexOf("{"))).trim();
        let parts = head.split(" ");
        name = parts[parts.length - 1];
      }
    } catch (e) {}

    return name;
  }
}

export function nameof(o) {
  return Name.of(o);
}

export default nameof;
