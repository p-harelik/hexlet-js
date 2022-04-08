import capitalize from "../src/capitalize.js";
import assert from "assert";

assert(capitalize("hello") === "Hello");
assert(capitalize("") === "");

console.log("Все тесты пройдены!");
