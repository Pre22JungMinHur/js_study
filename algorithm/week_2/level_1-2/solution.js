
export const printTriangle = function (line) {
    let result = ''
    for (let i = line - 1; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            result = result + '*'
            if (j === 1) {
                result = result + '*\n'
            }
        }
    }
    result = result + '*'
    return result
}

export default printTriangle