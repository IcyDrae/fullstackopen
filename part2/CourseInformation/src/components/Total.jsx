const Total = ({parts}) => {
  const total = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return (
    <p>total of {total} exercises</p>
  );
};

export default Total;

