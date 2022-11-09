



const messagesEdit = document.querySelector('#messagesEdit');
let messageId = localStorage.getItem('idMes');



const editMessage = (event) => {

  const authorInput = document.querySelector('#authorInput');
  const messageInput = document.querySelector('#messageInput').value;

    let arr = {'messageId':messageId, 'messageInput':messageInput};

    fetch('http://localhost:5000/messages', {
        method: 'PUT',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify(arr)
      })
      .then( () => {
        location.href = 'index.html';
      })
}


messagesEdit.addEventListener('click', editMessage);