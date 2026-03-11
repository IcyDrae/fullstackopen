require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");

app.use(express.json());

morgan.token("body", (request) => {
  return JSON.stringify(request.body);
});

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));

app.use(cors());

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  });
});

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const person = people.find(person => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

const generateId = () => {
  const maxId = people.length > 0
    ? Math.max(...people.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
};

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body) {
    return response.status(400).json({
      error: "Content is missing"
    });
  };

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "The name or the number are missing."
    });
  };

  const person = new Person({
    name: body.name,
    number: body.number
  });

  person.save().then(savedPerson => {
    response.json(savedPerson)
  });
});

app.get('/api/info', (request, response) => {
  const date = new Date();

  response.send(`
    <p>Phonebook has info for ${people.length} people.</p>
    <p>${date}</p>
  `
  );
});

// Middleware for error handling
const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'malformatted id' })
  }

  if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error);
};

app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

