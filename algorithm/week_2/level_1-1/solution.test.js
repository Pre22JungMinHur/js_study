import countWord from './solution'
const typeErrorMessage = 'String 값을 입력해주세요!'
test('countWord', () => {
  expect(countWord('Goorm  Edu')).toBe(2);
});