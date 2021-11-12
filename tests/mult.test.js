const mult = require('../src/mult')

it('should return return correct multiplication', () => {
  const result = mult(3, 6)
  expect(result).toBe(18)
})