
export const countWord = function (line) {
    let arrayedString = line.split('')
    let word = ''
    let counter = 0
    arrayedString.forEach((element, index) => {
        if (element !== ' ') {
            word = word + element
            if (index === arrayedString.length - 1) {
                counter++
            }
        } else {
            if (word !== '') {
                counter++
                word = ''
            }
        }
    })
    return counter
}

export default countWord