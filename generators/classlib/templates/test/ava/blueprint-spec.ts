import test from 'ava';
import { <%= className %> } from '../src/<%= fileName %>';

test('Should greet with message', t => {
  const greeter = new <%= className %>('friend');
  t.is(greeter.greet(), 'Bonjour, friend!');
});
