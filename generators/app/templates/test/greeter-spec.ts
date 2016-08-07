<% if (isWindows) { %>
/// <reference path="../node_modules/@types/mocha/index.d.ts" />
<% } %>
import { Greeter } from "../src/greeter";
import * as chai from "chai";

const expect = chai.expect;

describe("greeter", () => {
  it("should greet with message", () => {
    const greeter = new Greeter("friend");
    expect(greeter.greet()).to.equal("Bonjour, friend!");
  });
});
