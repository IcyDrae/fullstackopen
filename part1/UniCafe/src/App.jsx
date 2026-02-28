import { useState } from "react"

const StatisticLine = ({name, value}) => {
  return (
    <>
      <p>{name} {value}</p>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>
             No feedback given
        </p>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <StatisticLine name="good" value={good} />
      <StatisticLine name="neutral" value={neutral} />
      <StatisticLine name="bad" value={bad} />

      <StatisticLine name="all" value={good + neutral + bad} />
      <StatisticLine name="average" value={average} />
      <StatisticLine name="positive" value={positive} />
    </>

  )
};

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
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

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={setGoodHandler} text="good" />
      <Button onClick={setNeutralHandler} text="neutral" />
      <Button onClick={setBadHandler} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
