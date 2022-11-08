
import { v4 as uuidv4 } from 'uuid'; 

const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');


const renderTodo = (todoRender) => {
    todoList.innerHTML += `
      <li>
        <p>${todoRender.title} - <strong>${todoRender.author}</strong></p>
      </li>
    `
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newTodo = {
      id: uuidv4(),
      title: titleInput.value,
      author: authorInput.value
    }

  
  fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(newTodo)
    })
  
    renderTodo(newTodo);
  
   location.href = 'index.html';
  }
  
  todoForm.addEventListener('submit', handleSubmit)