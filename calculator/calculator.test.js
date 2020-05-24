const Calculator = require('./calculator.js')
const c  = new Calculator()

const h = new Human() 
h.speak()
h.walk()

test("add",() => {
    expect(c.add(1,2)).toEqual(3)
});

test("subtract",() => {
    expect(c.subtract(10,2)).toEqual(8)
})

test("multiply",() => {
    expect(c.multiply(10,2)).toEqual(20)
})

test("divide",() => {
    expect(c.divide(10,2)).toEqual(5)
})

test("divide by zero", () => {
    expect(c.divide(10, 0)).toEqual(Infinity)
})