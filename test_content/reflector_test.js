import { Reflector } from '../content/reflector.js';
import { ExampleClass } from './reflector_test_data.js'


console.log("\n==================== CLASS DEFINITION ====================\n");
console.log(ExampleClass.toString());

const instance = new ExampleClass("demo");

console.log("\n==================== INSTANCE REFLECTION ====================\n");

console.log("getProperties(instance):");
console.log(Reflector.getProperties(instance));

console.log("\ngetMethods(instance):");
console.log(Reflector.getMethods(instance));

console.log("\ngetGetters(instance):");
console.log(Reflector.getGetters(instance));

console.log("\ngetSetters(instance):");
console.log(Reflector.getSetters(instance));

console.log("\nreflect(instance):");
console.log(Reflector.reflect(instance));

console.log("\n==================== CLASS REFLECTION ====================\n");

console.log("getProperties(ExampleClass):");
console.log(Reflector.getProperties(ExampleClass));

console.log("\ngetMethods(ExampleClass):");
console.log(Reflector.getMethods(ExampleClass));

console.log("\ngetGetters(ExampleClass):");
console.log(Reflector.getGetters(ExampleClass));

console.log("\ngetSetters(ExampleClass):");
console.log(Reflector.getSetters(ExampleClass));

console.log("\nreflect(ExampleClass):");
console.log(Reflector.reflect(ExampleClass));

console.log("\n==================== END OF DEMO ====================\n");
