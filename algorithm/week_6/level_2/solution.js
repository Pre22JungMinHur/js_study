export const minValue =  (value) => {
    console.log(value)
    const minValueArray = value.split('\n')[1].split(' ')
    const minValue = Math.min(...minValueArray)
    console.log(minValue)
    return minValue
}

export default minValue