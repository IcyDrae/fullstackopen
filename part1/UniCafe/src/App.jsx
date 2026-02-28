import { useState } from "react"

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function setGoodHandler() {
    setGood(good + 1);
  }

  function setNeutralHandler() {
    setNeutral(neutral + 1);
  }

  function setBadHandler() {
    setBad(bad + 1);
  }

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={setGoodHandler}>good</button>
      <button onClick={setNeutralHandler}>neutral</button>
      <button onClick={setBadHandler}>bad</button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      <p>all { good + neutral + bad }</p>
      <p>average { average }</p>
      <p>positive { positive }</p>
    </>
  )
}

export default App
