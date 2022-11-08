
import { v4 as uuidv4 } from 'uuid'; 

const trainForm = document.querySelector('#trainForm');
const trainList = document.querySelector('#trainList');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');


const renderTrain = (trainToRender) => {
    trainList.innerHTML += `
      <li>
        <p>${trainToRender.from} - <strong>${trainToRender.to}</strong></p>
      </li>
    `
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newTrain = {
      id: uuidv4(),
      from: fromInput.value,
      to: toInput.value
    }

  
  fetch('http://localhost:5000/trains', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(newTrain)
    })
  
    renderTrain(newTrain);
  
   location.href = 'index.html';
  }
  
  trainForm.addEventListener('submit', handleSubmit)