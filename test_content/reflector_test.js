import { Reflector } from '../content/reflector.js';
import { SecretSymbol, ExampleClass } from './reflector_test_data.js'


console.warn("\n==================== CLASS DEFINITION ====================\n");
console.log(ExampleClass.toString());

console.log("\n==================== CLASS REFLECTION ====================\n");

console.warn("Reflector.getProperties(ExampleClass):");
console.log(Reflector.getProperties(ExampleClass));

console.warn("\nReflector.getMethods(ExampleClass):");
console.log(Reflector.getMethods(ExampleClass));

console.warn("\nReflector.getGetters(ExampleClass):");
console.log(Reflector.getGetters(ExampleClass));

console.warn("\nReflector.getSetters(ExampleClass):");
console.log(Reflector.getSetters(ExampleClass));

console.warn("\nReflector.reflect(ExampleClass):");
console.log(Reflector.reflect(ExampleClass));

console.warn("\n==================== INSTANCE REFLECTION ====================\n");

const instance = new ExampleClass("demo");
console.warn("const instance = new ExampleClass(\"demo\");");

console.warn("\nReflector.getProperties(instance):");
console.log(Reflector.getProperties(instance));

console.warn("\nReflector.getMethods(instance):");
console.log(Reflector.getMethods(instance));

console.warn("\nReflector.getGetters(instance):");
console.log(Reflector.getGetters(instance));

console.warn("\nReflector.getSetters(instance):");
console.log(Reflector.getSetters(instance));

console.warn("\nReflector.reflect(instance):");
console.log(Reflector.reflect(instance));

console.warn("\n==================== END OF DEMO ====================\n");
