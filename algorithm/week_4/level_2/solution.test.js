import armstrongNumber from './solution'

test('correctAnswer1', () => {
    expect(armstrongNumber('100 300')).toEqual('153 ');
});
test('correctAnser2', () => {
    expect(armstrongNumber('100 500')).toEqual('153 370 371 407 ');
})