import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) =>{ return (
<button onClick={handleClick}>{text}</button>

)}

const Statistic = ({text, value}) => {

  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>

    </tr>

  )
}

const Statistics = (props) => {

  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const allFeedback = props.allFeedback
  if (allFeedback === 0) {

    return (
      <div>
         No feedback given
      </div>
    )
  }
  return (
    <table> 
      <tbody>
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />  
      <Statistic text="all" value ={allFeedback} />
      <Statistic text="average" value ={good*1 - bad*1} />
      <Statistic text="positive" value ={good/allFeedback*100 + ' %'} /> 
      </tbody> 
    </table>
  )

}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAll] = useState(0)

  const handleGood = () => {

    setGood(good + 1)
    setAll(allFeedback + 1)
   }

   
  const handleBad = () => {

    setBad(bad + 1)
    setAll(allFeedback + 1)
   }

   
  const handleNeutral = () => {

    setNeutral(neutral + 1)
    setAll(allFeedback + 1)
   }

  return (
    <div>
      <h1> give feedback </h1>
      
      
      <Button  handleClick={handleGood} text="good"/>
      <Button  handleClick={handleBad} text="bad"/>
      <Button  handleClick={handleNeutral} text="neutral"/>

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} allFeedback={allFeedback} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
