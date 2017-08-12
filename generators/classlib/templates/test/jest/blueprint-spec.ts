import { <%= className %> } from '../src/<%= fileName %>';

test('Should greet with message', () => {
  const greeter = new <%= className %>('friend');
  expect(greeter.greet()).toBe('Bonjour, friend!');
});
