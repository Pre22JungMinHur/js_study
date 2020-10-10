export const distancBetweenDots = (line) => {
    const splittedArray = line.split('\n')
    const firstDot = splittedArray[0].split(' ').reduce((prev, next) => {
        return Number(prev) - Number(next)
    })
    const secondDot = splittedArray[1].split(' ').reduce((prev, next) => {
        return Number(prev) - Number(next)
    })
    const distance = Math.pow(firstDot) + Math.pow(secondDot)
    console.log(Math.sqrt(distance))
}

export default distancBetweenDots

