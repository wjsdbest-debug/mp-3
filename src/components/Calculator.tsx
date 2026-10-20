import useCalculator from '../hooks/useCalculator'

export default function Calculator() {
  const {
    firstNumber,
    secondNumber,
    result,
    setFirstNumber,
    setSecondNumber,
    calculate,
    clearCalculator,
  } = useCalculator()

  return (
    <section className="calculator">
      <h2>JavaScript Calculator</h2>
      <p>Enter two numbers and select an operation.</p>
      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="first-number">First Number</label>
          <input
            type="number"
            id="first-number"
            step="any"
            value={firstNumber}
            onChange={(event) => setFirstNumber(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="second-number">Second Number</label>
          <input
            type="number"
            id="second-number"
            step="any"
            value={secondNumber}
            onChange={(event) => setSecondNumber(event.target.value)}
          />
        </div>
      </div>
      <div className="calculator-buttons">
        <button type="button" onClick={() => calculate('add')}>+</button>
        <button type="button" onClick={() => calculate('subtract')}>-</button>
        <button type="button" onClick={() => calculate('multiply')}>*</button>
        <button type="button" onClick={() => calculate('divide')}>/</button>
        <button type="button" onClick={() => calculate('power')}>**</button>
        <button type="button" className="clear-button" onClick={clearCalculator}>
          Clear
        </button>
      </div>
      <div className="calculator-result">
        <h3 className={typeof result === 'number' && result < 0 ? 'negative-result' : ''}>
          {result}
        </h3>
      </div>
    </section>
  )
}
