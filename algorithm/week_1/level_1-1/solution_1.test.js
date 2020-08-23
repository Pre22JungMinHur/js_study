import shift, {isString} from './solution_1'
const typeErrorMessage = 'String 값을 입력해주세요!'
describe ('isRightType', ()=>{
  it('type이 맞지 않으면 typeErrorMessage를 반환합니다',()=>{
    expect(isString(0)).toEqual(typeErrorMessage)
    expect(isString(false)).toEqual(typeErrorMessage)
    expect(isString([1,2,3])).toEqual(typeErrorMessage)
    expect(isString({a:1,b:2})).toEqual(typeErrorMessage)
  })
})
test('shift', () => {
  expect(shift('5 3')).toBe(`${5>>3}\n${5<<3}`);
});