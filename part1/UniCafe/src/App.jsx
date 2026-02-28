import { useState } from "react"

const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>

      <p>all { props.good + props.neutral + props.bad }</p>
      <p>average { props.average }</p>
      <p>positive { props.positive }</p>
    </>

  )
};

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

      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive}  />
    </>
  )
}

export default App
