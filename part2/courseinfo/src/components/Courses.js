import React from 'react'
const Courses = ({courses}) => courses.map(course => <Course key={course.id} course={course}/>)

const Course = ({course}) => {

  return (
     <div>
    <Header course={course} />
    <Content course={course} />
    <Total   parts={course.parts} />
    </div>
    
  )
}

const Header = ({ course }) => <h2>{course.name}</h2>


const Content = ({ course }) => <div>{course.parts.map((part, i) => <Part key= {i} part={part} />)}</div> 


const Part = ({part}) => <p>{part.name} {part.exercises}</p> 


const Total = ({ parts }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises;
  const sum = parts.reduce(reducer, 0)

  return(
    <p><b>Total of  {sum} exercises</b></p>
  ) 
}

export default Courses