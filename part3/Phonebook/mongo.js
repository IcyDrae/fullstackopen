const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
};

const password = process.argv[2];

const url =
  `mongodb+srv://gjonireard_db_user:${password}@cluster0.avgd6wt.mongodb.net/?appName=Cluster0`;

mongoose.set('strictQuery', false);

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String
});

const Person = mongoose.model('Person', personSchema);

// IF ONLY PASSWORD → PRINT ALL PERSONS
if (process.argv.length === 3) {
  Person.find({}).then(persons => {
    console.log('phonebook:');

    persons.forEach(person => {
      console.log(person.name, person.number)
    });

    mongoose.connection.close();
  });
};

// IF PASSWORD + NAME + NUMBER → ADD PERSON
if (process.argv.length === 5) {
  const name = process.argv[3];
  const number = process.argv[4];

  const person = new Person({
    name: name,
    number: number
  });

  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  });
};
