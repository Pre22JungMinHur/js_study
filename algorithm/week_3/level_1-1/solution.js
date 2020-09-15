export const isNumber = (value) => {
    return isNaN(Number(value))
}
export const leagueMatchTimes = (line) => {
    let times = 0
    if (!isNaN(line)) {
        times = line*(line-1)/2
        return times
    }
    return 'please input number'
}
export default leagueMatchTimes