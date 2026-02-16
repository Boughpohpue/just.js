import { Is } from './isthis.js';
import extendObjectPrototype from 'https://boughpohpue.github.io/jxtensions/compiled/jxtensions-1.0.1.js';

extendObjectPrototype();


/* Just a bit wild */
export class Wild {
  static Surely = "+";
  static Perhaps = "?";
  static Whatever = "*";
}

/* Just a matcher */
export class Matcher {
  static get #tagRex() {
    return /\[%\s*([A-Za-z_$][\w.$]*)\s*%\]/g;
  }
  static isMatching(text, expr) {
    if (!Is.thisString(text) || !Is.thisString(expr)) return false;
    if (text === expr) return true;

    const parts = expr.split(Wild.Whatever);
    const start = parts.first;
    const end = parts.last;

    return text.startsWith(start) && text.endsWith(end) && parts.filter((p) => !text.includes(p)).length == 0;
  }
  static entag(toTag) {
    if (this.tagged(toTag)) {
      return toTag;
    }
    return Is.thisNothing(toTag) ? toTag : `[%${toTag}%]`;
  }
  static tagged(text) {
    return text != text.replace(this.#tagRex, "");
  }
  static detag(text, source) {
    if (Is.thisNothing(source) || !Is.thisString(text) || !this.tagged(text)) {
      return text;
    }

    return text.replace(this.#tagRex, (m, p) => {
      const val = source.resolveProperty(p);
      return val != null ? String(val) : m;
    });
  }
}

export default Matcher;
