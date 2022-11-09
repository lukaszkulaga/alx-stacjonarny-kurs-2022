


const messagesList = document.querySelector('#messagesList');
const messagesDelete = document.querySelector('#messagesDelete');


const renderMessage = (messageRender) => {
    messagesList.innerHTML += `
      <li>
        <p>${messageRender.message} - <strong>${messageRender.author}</strong> <a id="messageEdit" data-id="${messageRender.id}"> edytuj </a></p>
      </li>
    `
  }

fetch('http://localhost:5000/messages')
    .then((response) => {

    return response.json();
    })
    .then( (data) => {

        data.messages.forEach((message) => {
            renderMessage(message);
        })
    })
    .catch ((error) => {
        console.log(error);
    })


const handleDelete = (event) => {

    fetch('http://localhost:5000/messages', {
        method: 'DELETE'
    })
    .then( (data) => {
        messagesList.innerHTML = '';
    })
    .catch ((error) => {
        console.log(error);
    })
}

const handleSaveLS= (messageId) => {

    localStorage.setItem('idMes',messageId);
    location.href = 'edit.html';
}


const handleListClick = (event) => {
    if(event.target.id === 'messageEdit') {
       let idMessage =  event.target.getAttribute('data-id');
       handleSaveLS(idMessage);
    }
}



messagesDelete.addEventListener('click', handleDelete);
messagesList.addEventListener('click', handleListClick);
