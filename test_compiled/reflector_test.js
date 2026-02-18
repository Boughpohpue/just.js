import { Reflector } from '../compiled/just.js-1.0.1.js';
import { SecretSymbol, ExampleClass, exmplClsInstance } from './reflector_test_data.js'

const codeStyleMap = new Map([["style", "color: goldenrod;"]]);
const headStyleMap = new Map([["style", "font-size: 15px; text-decoration: underline;"]]);

console.info("\n\nStarting test...\n");

console.warn("\n\nTESTING CLASS-LEVEL REFLECTION:\n", headStyleMap);
console.log("Reflector.getProperties(ExampleClass);", codeStyleMap);
console.log(Reflector.getProperties(ExampleClass));
console.log("\nReflector.getMethods(ExampleClass);", codeStyleMap);
console.log(Reflector.getMethods(ExampleClass));
console.log("\nReflector.getGetters(ExampleClass);", codeStyleMap);
console.log(Reflector.getGetters(ExampleClass));
console.log("\nReflector.getSetters(ExampleClass);", codeStyleMap);
console.log(Reflector.getSetters(ExampleClass));
console.log("\nReflector.reflect(ExampleClass);", codeStyleMap);
console.log(JSON.stringify(Reflector.reflect(ExampleClass), null, 2));

console.warn("\n\nTESTING INSTANCE-LEVEL REFLECTION:\n", headStyleMap);
console.log("Reflector.getProperties(exmplClsInstance);", codeStyleMap);
console.log(Reflector.getProperties(exmplClsInstance));
console.log("\nReflector.getMethods(exmplClsInstance);", codeStyleMap);
console.log(Reflector.getMethods(exmplClsInstance));
console.log("\nReflector.getGetters(exmplClsInstance);", codeStyleMap);
console.log(Reflector.getGetters(exmplClsInstance));
console.log("\nReflector.getSetters(exmplClsInstance);", codeStyleMap);
console.log(Reflector.getSetters(exmplClsInstance));
console.log("\nReflector.reflect(exmplClsInstance);", codeStyleMap);
console.log(JSON.stringify(Reflector.reflect(exmplClsInstance), null, 2));

console.info("\n\nTest complete!\n");
