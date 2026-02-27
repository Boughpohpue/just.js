import { nameof } from '../../compiled/just.js-1.0.1.js';

const codeStyleMap = new Map([["style", "color: goldenrod;"]]);
const headStyleMap = new Map([["style", "font-size: 15px; text-decoration: underline;"]]);


const primitive = 144;
console.log(nameof({primitive}));

function someFunction() { }
console.log(nameof(someFunction));

class SomeClass {
  id;
  username;
  constructor(id, username) {
    if (!id || typeof id !== "number" || id <= 0) {
      throw new Error(`Parameter '${nameof({id})}' must be a positive, non-zero number!`);
    }
    if (!username || typeof username !== "string" || username.length === 0) {
      throw new Error(`Parameter '${nameof({username})}' must be a non-empty string!`);
    }
    this.id = id;
    this.username = username;
  }
  instanceMethod() {}
  static staticMethod() {}
}
console.log(nameof(SomeClass));
console.log(nameof(SomeClass.staticMethod));

const instance = new SomeClass(1, 'user_1');
console.log(nameof({instance}));
console.log(nameof(instance.instanceMethod));

try {
  const instanceInvalidId = new SomeClass(-6, "itsme");
}
catch (ex) {
  console.error(`${ex}`);
}

try {
  const instanceInvalidUname = new SomeClass(9, "");
}
catch (ex) {
  console.error(`${ex}`);
}
