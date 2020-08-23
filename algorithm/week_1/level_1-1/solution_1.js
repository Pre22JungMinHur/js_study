function shift(line) {
  let splittedLine = line.split('')
	let a = splittedLine[0]
	let b = splittedLine[2]
  let result = `${Number(a)>>Number(b)}\n${Number(a)<<Number(b)}`
  return result
}
export default shift