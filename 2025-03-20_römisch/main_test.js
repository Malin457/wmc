import { assertEquals } from "@std/assert";
import { add } from "./main.js";

Deno.test(function addTest() {
  assertEquals(add(2, 4), 6);
});
