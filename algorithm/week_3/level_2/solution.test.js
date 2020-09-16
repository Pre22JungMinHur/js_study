import {isRightValue, isString} from './solution'
import Substring from './solution'

test('isValueLessThanHundred', () => {
    expect(isRightValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis elit ac imperdiet porta ante.')).toEqual(true);
});
test('substring',()=>{
    expect(Substring('abcdefg')).toEqual('a\nab\nabc\nabcd\nabcde\nabcdef\nabcdefg')
})