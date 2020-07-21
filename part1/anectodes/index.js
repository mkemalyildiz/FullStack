import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const points = Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(points)

  const handleNextAnectode = () => {

    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {

    //console.log(selected)
    //setSelected(votes[selected] +=1)
    let newVotes = [...votes]
    newVotes[selected] = newVotes[selected] + 1
    setVotes(newVotes)

    //votes[selected] = votes[selected] + 1
    //console.log(votes)
    //setVotes(votes)
  }
  
 
 return (
    <div>
      <h1>Anectode of the day</h1>
 <p>{props.anecdotes[selected]} has {votes[selected]} votes </p>
      <Button onClick={handleNextAnectode} text="next anectode"/>
      <Button onClick={handleVote}  text="vote"/>
      {console.log(selected)}
      {console.log(votes)}
      
      <h1> Anectode with most votes</h1>
      {console.log("alooo")}

      <p>{props.anecdotes[votes.indexOf(Math.max(...votes))]} has {Math.max(...votes)} votes</p>
      
      
      
    </div>
  )
  


}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)