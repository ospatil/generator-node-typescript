import test from "ava";
import * as index from "../src/index";

test("Should have Greeter available", t => {
  t.truthy(index.Greeter);
});

