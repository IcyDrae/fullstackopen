import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      phone: ""
    }
  ]);

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

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
      phone: newNumber
    }

    setPersons(persons.concat(noteObject))
    setNewName('');
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  const [result, setResult] = useState("");

  const handleResult = (event) => {
    setResult(event.target.value);
  };

  const personsToShow = persons.filter(person => {
    return person.name.toLowerCase().includes(result.toLowerCase());
  });

  return (
    <>
      <div>
      <h2>Phonebook</h2>
      filter shown with: <input value={result} onChange={handleResult}/>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
          <br />
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.phone}
          </div>
        )
      })}
    </div>
    </>
  )
}

export default App
