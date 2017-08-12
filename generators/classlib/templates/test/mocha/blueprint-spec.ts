<% if (isWindows) { %>
/// <reference path='../node_modules/@types/mocha/index.d.ts' />
<% } %>
import { <%= className %> } from '../src/<%= fileName %>';
import * as chai from 'chai';

const expect = chai.expect;

describe('<%= className %>', () => {
  it('should greet with message', () => {
    const greeter = new <%= className %>('friend');
    expect(greeter.greet()).to.equal('Bonjour, friend!');
  });
});
