function Persons({personsToShow}) {
  return (
    <>
      <h2>Numbers</h2>
      {personsToShow.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        )
      })}
    </>
  )
};

export default Persons

