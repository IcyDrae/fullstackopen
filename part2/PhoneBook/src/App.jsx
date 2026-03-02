import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas'
    }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    for (let i = 0; i < persons.length; i++) {
      let person = persons[i];

      if (newName === person.name) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    const noteObject = {
      id: persons.length + 1,
      name: newName,
    }

    setPersons(persons.concat(noteObject))
    setNewName('');
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <>
      <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.map((person) => {
        return <p key={person.id}>{person.name}</p>
      }) }
    </div>
    </>
  )
}

export default App
