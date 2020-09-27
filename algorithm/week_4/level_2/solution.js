export const armStrongNumber = (line) => {
    let splitedArray = line.trim().split(' ')
    let armstrongNum = 0
    let armstrongNumArray = []
    for (let i = Number(splitedArray[0]); i < Number(splitedArray[1]); i++) {
        let splitToEach = String(i).split('')
        for (let i = 0; i < splitToEach.length; i++) {
            armstrongNum += Math.pow(Number(splitToEach[i]), 3)
        }
        if (armstrongNum === Number(i)) {
            armstrongNumArray.push(String(armstrongNum))
            armstrongNum = 0
        } else {
            armstrongNum = 0
        }
    }
    // console.log(armstrongNum)
    // console.log(armstrongNumArray.join(' '))
    return armstrongNumArray.join(' ')
}

export default armStrongNumber