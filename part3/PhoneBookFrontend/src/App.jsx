import { useState, useEffect } from "react"
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import request from "./modules/request";
import "./index.css";

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
        if (newNumber === person.number) {
          alert(`${newName} is already added to phonebook.`);
          return;
        }

        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          request.changeNumber(person.name, person.id, newNumber).then(response => {
            setPersons(
              persons.map(p.id !== person.id ? p : response.data)
            );

            setType("success");
            setMessage(`Updated ${response.data.name}`);

            setTimeout(() => {
              setMessage(null);
            }, 5000);
          }).catch(() => {
            setType("error");
            setMessage(`Information of ${person.name} has already been removed from server.`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);

            setPersons(persons.filter(p => p.id !== person.id));
          });
        }

        setNewName('');
        setNewNumber('');

        return;
      }
    }

    const noteObject = {
      name: newName,
      number: newNumber
    }

    request.createNew(noteObject).then(response => {
      setPersons(persons.concat(response.data));
      setType("success");
      setMessage(`Added ${response.data.name}`);

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    });

    setNewName('');
    setNewNumber('');
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
    const response = request.getAll();

    response.then((responseObject) => {
      setPersons(responseObject.data);
    });
  }, []);

  const deletePerson = (id, name) => {
    if (window.confirm("Delete " + name + " ?")) {
      request.deletePerson(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      });
    }
  };

  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  return (
    <>
    <div>
      <Notification message={message} type={type} />
      <Filter result={result} handleResult={handleResult}/>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Persons personsToShow={personsToShow} onDeleteHandle={deletePerson}/>
    </div>
    </>
  )
}

export default App
