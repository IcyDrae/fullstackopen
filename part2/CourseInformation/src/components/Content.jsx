const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.exercises}
      </p>
    </>
  )
};

const Content = (props) => {
  return (
    <>
      { props.parts.map((part) => {
        return <Part key={part.id} part={part} exercises={part.exercises} />
      }) }
    </>
  )
};

export default Content;

