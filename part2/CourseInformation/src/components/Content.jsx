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
      <Part part={props.parts[0]} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1]} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2]} exercises={props.parts[2].exercises} />
    </>
  )
};

export default Content;

