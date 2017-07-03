import test from 'ava';
import { Greeter } from "../src/greeter";

test("Should greet with message", t => {
  const greeter = new Greeter("friend");
  t.is(greeter.greet(), "Bonjour, friend!");
});
