import shift from './solution_1'

test('shift', () => {
  expect(shift('5 3')).toBe(`${5>>3}\n${5<<3}`);
});