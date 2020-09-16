export const isRightValue = (value) => {
    if (value.length > 100) {
        return false
    }
    return true
}
export const isString = (value) => {
    if (typeof value !== 'string') {
        return false
    }
    return true
}
export const Substring = (line) => {
    if (isRightValue(line) && isString(line)) {
        let splittedLine = line.trim().split('')
        let resultString = ''
        for (let i = 0; i < splittedLine.length; i++) {
            for (let j = 0; j <= i; j++) {
                resultString += splittedLine[j]
            }
            if (i !== splittedLine.length - 1) {
                resultString += '\n'
            }
        }
        console.log(resultString)
        return resultString
    }
}

export default Substring


Substring('abcdefg')