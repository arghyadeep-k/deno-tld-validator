import { assertEquals } from "./test_deps.ts";
import { validateTLD } from "./mod.ts";

Deno.test("Test with defaults", () => {
  assertEquals(validateTLD("in"), true);
});
