import {isNumber} from './solution'
import leagueMatchTimes from './solution'

test('isNumberWorking', () => {
    expect(isNumber(1)).toEqual(false);
    expect(isNumber(10)).toEqual(false);
    expect(isNumber('abcd')).toEqual(true);
    expect(isNumber(null)).toEqual(false);
   
});

test('leagueMatchTimesWorking', () => {
    expect(leagueMatchTimes(4)).toEqual(6)
    expect(leagueMatchTimes(10)).toEqual(45)
})