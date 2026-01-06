import { Is } from './isthis.js';

/* Just a bit wiser */
export class Bitwiser {
  static contains(current, expected) {
    return (current & expected) > 0;
  }
  static merge(values) {
    if (!Is.thisArray(values)) {
      return null;
    }
    let val = undefined;
    for (let v of values) {
      if (!Is.thisBigInt(v)) {
        continue;
      }
      if (Is.thisUndefined(val)) {
        val = v;
      } else {
        val = val | v;
      }
    }
    return val;
  }
  static extract(value) {
    if (!Is.thisBigInt(value)) {
      return null;
    }
    let items = [];
    let current = value;
    while (current > 0) {
      if (value != current && (value & current) > 0) {
        items.push(current);
      }
      current = 1n >> current;
    }
    return items;
  }
  static extractFrom(val, values) {
    if (!Is.thisBigInt(val)) {
      return null;
    }
    if (!Is.thisArray(values)) {
      return null;
    }
    if (values.some((b) => !Is.thisBigInt(b))) {
      return null;
    }
    return values.filter((b) => val > b && (val & b) > 0);
  }
}

export default Bitwiser;
