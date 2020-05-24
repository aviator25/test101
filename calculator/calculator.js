class Calculator {
    constructor () {

    }
    /**
     * Adds two numbers together
     * @param {*} firstOperand 
     * @param {*} secondOperand 
     */
    add(firstOperand, secondOperand) {
        return firstOperand + secondOperand
    }
    /**
     * Subtracts two numbers together
     * @param {*} firstOperand 
     * @param {*} secondOperand 
     */
     subtract(firstOperand, secondOperand) {
        return firstOperand - secondOperand
     }

     /**
      * 
      * Multiplies two numbers together
      * @param {*} firstOperand 
      * @param {*} secondOperand 
      */
     multiply(firstOperand, secondOperand) {
        return firstOperand * secondOperand
     }

     /**
      * 
      * @param {*} firstOperand 
      * @param {*} secondOperand 
      */
     divide(firstOperand, secondOperand)    {
        return firstOperand / secondOperand
     }

}

module.exports = Calculator