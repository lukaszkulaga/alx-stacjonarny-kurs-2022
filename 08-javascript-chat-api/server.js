import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { addMessage,editMessage, fetchMessages, removeMessages } from './controllers/messages.js';


const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));



app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})


app.get('/messages', (req, res) => {
  fetchMessages()
    .then(data => {
      res.status(200).send(data)
    })
})

app.post('/messages', (req, res) => {


  if(!req.body.id) {
    return res.status(400).send('Lack of id in the sent request')
  }

  addMessage(req.body)
    .then(() => {
      res.status(200).send('OK!')
    })
})

app.put('/messages', (req, res) => {

  editMessage(req.body)
    .then(() => {
      res.status(200).send('OK!')
    })
})

app.delete('/messages', (req, res) => {

  removeMessages()
  .then( (data) =>{

    return res.status(200).send(data);
  })

})








app.listen(5000, () => {
  console.log(`Server is running on port 5000`)
})