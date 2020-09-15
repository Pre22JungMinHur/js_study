import printTriangle from './solution'
test('isRight', () => {
    expect(printTriangle(5)).toEqual(`*****\n****\n***\n**\n*`)
})