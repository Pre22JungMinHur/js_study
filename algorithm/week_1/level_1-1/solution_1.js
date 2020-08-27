export const isString = (value) => {
  return typeof value === 'string' ? true : 'String 값을 입력해주세요!'
}
const shift = (line) => {
  if (isString(line)) {
    let splittedLine = line.trim().split('')
    let num = ''
    let shiftNum = ''
    for (let i = 0; i < splittedLine.length; i++) {
      if (splittedLine[i] === ' ') {
        num = splittedLine.slice(0, i).join('')
        shiftNum = splittedLine.slice(i + 1, splittedLine.length).join('')
      }
    }
    let result = `${Number(num) >> Number(shiftNum)}\n${Number(num) << Number(shiftNum)}`
    return result
  }
  return isString(line)

}
export default shift