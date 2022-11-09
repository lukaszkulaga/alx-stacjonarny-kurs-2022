
import { v4 as uuidv4 } from 'uuid'; 

const messageForm = document.querySelector('#messageForm');
const messageList = document.querySelector('#messageList');
const messageInput = document.querySelector('#messageInput');
const authorInput = document.querySelector('#authorInput');


const renderMessage = (messageRender) => {
  messageList.innerHTML += `
      <li>
        <p>${messageRender.message} - <strong>${messageRender.author}</strong> <a href="edit.html"> edytuj </a></p>
      </li>
    `
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newMessage = {
      id: uuidv4(),
      message: messageInput.value,
      author: authorInput.value
    }

  
  fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(newMessage)
    })
  
    renderMessage(newMessage);
  
    location.href = 'index.html';
  }
  
  messageForm.addEventListener('submit', handleSubmit)