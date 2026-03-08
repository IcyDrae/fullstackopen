function Persons({personsToShow, onDeleteHandle}) {
  return (
    <>
      <h2>Numbers</h2>
      {personsToShow.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => onDeleteHandle(person.id, person.name)}>Delete</button>
          </div>
        )
      })}
    </>
  )
};

export default Persons

