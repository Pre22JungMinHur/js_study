
export const pickThreeNumber = function (line) {
    let splittedArray = line.trim().split('\n')
    let candidates = splittedArray[0].split(" ")
    let answer = Number(splittedArray[1])
    let condition = []
    let plus = 0
    for (let i = 1; i < candidates.length; i++) {
        if (plus === answer - candidates[0]) {
            break;
        }
        plus += candidates[i]
    }
}

export default pickThreeNumber

