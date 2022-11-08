import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { addTodo, fetchTodos, removeTodos } from './controllers/todos.js';

// Wlasny server (BE)
const app = express();

// Uzycie biblioteki bodyParser, zeby przeksztalcana nam format JSON na obiekty JS podczas zapytan POST i PUT
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

// API - Application Programming Interface
// Zbior endpointow

// ENDPOINT - Pojedynczy punkt wejsciowy do aplikacji
app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})

// ENDPOINT - Pojedynczy punkt wejsciowy do aplikacji
app.get('/todos', (req, res) => {
  fetchTodos()
    .then(data => {
      res.status(200).send(data)
    })
})

app.post('/todos', (req, res) => {
  // req.body to jest zawartosc body, ktory przyjdzie z zapytania POST
  console.log(req.body);

  // TUTAJ JEST MIEJSCE NA WALIDACJE
  if(!req.body.id) {
    return res.status(400).send('Lack of id in the sent request')
  }

  addTodo(req.body)
    .then(() => {
      res.status(200).send('OK!')
    })
})

app.delete('/todos', (req, res) => {

  removeTodos()
  .then( (data) =>{

    return res.status(200).send(data);
  })

})








app.listen(5000, () => {
  console.log(`Server is running on port 5000`)
})