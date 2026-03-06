import axios from "axios";
import { useState, useEffect } from "react"
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let i = 0; i < persons.length; i++) {
      let person = persons[i];

      if (newName === person.name) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    const noteObject = {
      name: newName,
      number: newNumber
    }

    const response = axios.post("http://localhost:3001/persons", noteObject);
    response.then((data) => {
      console.log(data);
    });

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

  useEffect(function() {
    const request = axios.get("http://localhost:3001/persons");

    request.then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <>
    <div>
      <Filter result={result} handleResult={handleResult}/>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Persons personsToShow={personsToShow}/>
    </div>
    </>
  )
}

export default App
