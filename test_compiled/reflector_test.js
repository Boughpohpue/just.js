import { Reflector } from '../compiled/just.js-1.0.1.js';
import { ExampleClass } from './reflector_test_data.js'


console.log("\n==================== CLASS DEFINITION ====================\n");
console.log(ExampleClass.toString());

console.log("\n==================== CLASS REFLECTION ====================\n");

console.log("Reflector.getProperties(ExampleClass):");
console.log(Reflector.getProperties(ExampleClass));

console.log("\nReflector.getMethods(ExampleClass):");
console.log(Reflector.getMethods(ExampleClass));

console.log("\nReflector.getGetters(ExampleClass):");
console.log(Reflector.getGetters(ExampleClass));

console.log("\nReflector.getSetters(ExampleClass):");
console.log(Reflector.getSetters(ExampleClass));

console.log("\nReflector.reflect(ExampleClass):");
console.log(Reflector.reflect(ExampleClass));


console.log("\n==================== INSTANCE REFLECTION ====================\n");

const instance = new ExampleClass("demo");
console.log("const instance = new ExampleClass(\"demo\");\n");

console.log("Reflector.getProperties(instance):");
console.log(Reflector.getProperties(instance));

console.log("\nReflector.getMethods(instance):");
console.log(Reflector.getMethods(instance));

console.log("\nReflector.getGetters(instance):");
console.log(Reflector.getGetters(instance));

console.log("\nReflector.getSetters(instance):");
console.log(Reflector.getSetters(instance));

console.log("\nReflector.reflect(instance):");
console.log(Reflector.reflect(instance));


console.log("\n==================== END OF DEMO ====================\n");
