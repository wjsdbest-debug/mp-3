import { useState } from 'react'

type Operation = 'add' | 'subtract' | 'multiply' | 'divide' | 'power'

export default function useCalculator() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [result, setResult] = useState<string | number>('')

  function calculate(operation: Operation) {
    const first = Number.parseFloat(firstNumber)
    const second = Number.parseFloat(secondNumber)

    if (Number.isNaN(first) || Number.isNaN(second)) {
      setResult('Please enter two numbers.')
      return
    }

    if (operation === 'add') setResult(first + second)
    if (operation === 'subtract') setResult(first - second)
    if (operation === 'multiply') setResult(first * second)
    if (operation === 'divide') {
      setResult(second === 0 ? 'Cannot divide by zero.' : first / second)
    }
    if (operation === 'power') {
      setResult(
        Number.isInteger(second)
          ? first ** second
          : 'Please use a whole number for the exponent.',
      )
    }
  }

  function clearCalculator() {
    setFirstNumber('')
    setSecondNumber('')
    setResult('')
  }

  return {
    firstNumber,
    secondNumber,
    result,
    setFirstNumber,
    setSecondNumber,
    calculate,
    clearCalculator,
  }
}
