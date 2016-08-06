import { Greeter } from '../src/greeter';
import * as chai from 'chai';

var expect = chai.expect;

describe('greeter', () => {
  it('should greet with message', () => {
    var greeter = new Greeter('friend');
    expect(greeter.greet()).to.equal('Bonjour, friend!');
  });
});
