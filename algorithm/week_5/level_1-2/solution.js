export const minValue = (line) => {
    const splittedLine = line.split('\n')
    const valueArray = splittedLine[1].split(' ').map(element => {
        return Number(element)
    })
    const minValue = valueArray.reduce((prev, curr) => {
        return prev > curr ? curr : prev
    })
    return minValue
}

export default minValue

