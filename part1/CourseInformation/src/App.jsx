const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1]} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2]} exercises={props.parts[2].exercises} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>
  )
}

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

export default App

