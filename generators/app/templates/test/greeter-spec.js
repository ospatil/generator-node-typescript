var Greeter = require("../lib/greeter");

describe("greeter", function () {
  it("should greet with message", function () {
    var greeter = new Greeter('friend');
    expect(greeter.greet()).toBe('Bonjour, friend!');
  });
});
