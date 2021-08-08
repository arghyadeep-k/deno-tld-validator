import { assertEquals } from "./test_deps.ts";
import { validateTLD } from "./mod.ts";

Deno.test("Test with lowercase input", () => {
  const input = "in";
  assertEquals(validateTLD(input), true);
});

Deno.test("Test with uppercase input", () => {
  const input = "IN";
  assertEquals(validateTLD(input), true);
});

Deno.test("Test with unhappy path", () => {
  const input = "zebra";
  assertEquals(validateTLD(input), false);
});

Deno.test("Test with happy path", () => {
  const input = "PHOTOGRAPHY";
  assertEquals(validateTLD(input), true);
});
