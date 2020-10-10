export const subStr = (line) => {
    const splittedLine = line.split('\n')
    const range = splittedLine[1].split('')
    const startValue = Number(range[0]) - 1
    const substring = splittedLine[0].slice(startValue, Number(range[2]) + startValue)
    return substring
}
export default subStr