import { ref, onValue, set,remove } from "firebase/database";
import { database } from "../utils/firebase";

const messagesList = document.querySelector('#messagesList');
const addMessageForm = document.querySelector('#addMessageForm');
const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');

// To sluzy do tego, aby powiedziec firebase, z ktorego miejsca w bazie danych chcemy pobrac dane.
const messagesRef = ref(database, '/messages');
let messagesFromDB = [];

const renderMessages = messages => {
  messagesList.innerHTML = '';

  messages.forEach(messageFromFB => {

    messagesList.innerHTML += `
    <li>
      ${messageFromFB.message} - <strong data-eleaut="${messageFromFB.author}"  >${messageFromFB.author}</strong>

      <button class="edit" data-elementId="${messageFromFB.id}">
        &#9998;
      </button>
      <button class="close" data-elementId="${messageFromFB.id}"> X </button>
    </li>
  `
  })
}

const fetchMessages = () => {
    // Potrzebujemy wlaczyc nasluchiwanie na zmiany w firebase
    onValue(messagesRef, (data) => {
      const messages = data.toJSON();
  
      // Zeby miec ID w obiekcie, ktory przychodzi z firebase, potrzebujemy dodac id (ktory jest kluczem obiektu), do kazdego obiektu pod pozycja id
  
      const messagesWithId = Object.keys(messages).map(key => {
        messages[key].id = key;
        return messages[key];
      })
      messagesFromDB = messagesWithId
      renderMessages(messagesWithId)
  
      // Potrzebujemy obiekt obiektow, zamienic na tablice obiektow
      // Object.values przerabia wartosci obiektu na tablice obiektow (pomija klucze)
      // renderMessages(Object.values(messages))
    })
  }

const saveMessage = messageToSave => {
    const randomId = Date.now();
    set(ref(database, 'messages/' + randomId), messageToSave);
}


const handleAddMessage = (event) => {
  event.preventDefault();

  // firebase sam generuje ID, wiec nie potrzebujemy tutaj uuid
  const newMessage = {
    author: authorInput.value,
    message: messageInput.value
  }

  saveMessage(newMessage);
}


const handleListClick = (event) => {
    if(event.target.classList.contains('close')) {
        handleMessageRemove(event);
    }
    if(event.target.classList.contains('edit')) {
        handleMessageEdit(event);
    }
}

const removeMessage = id => {
    remove(ref(database, 'messages/' + id));
}


const handleMessageRemove = (event) => {
    const idToRemove = event.target.getAttribute('data-elementId')
    removeMessage(idToRemove);
    event.target.parentElement.remove()
  }

const editMessage = id => {

    const authorInput = document.querySelector('#authorInput');
    const messageInput = document.querySelector('#messageInput');
   

    const messageArr =  messagesFromDB;

    //const parsedJSONzzz = JSON.parse(parsedJSON);

console.log(messageArr);

    // const editedElementIndex = parsedJSONzzz.messages.findIndex(message => message.id === id);

    // authorInput.value = editedElementIndex.message;

    // Tutaj robimy podmiane danych na te, ktore pochodza z requestu
    // parsedJSON.messages[editedElementIndex].message = messageToEdit.message
    // parsedJSON.messages[editedElementIndex].author = messageToEdit.author

    // return fsp.writeFile('data/messages.json', JSON.stringify(parsedJSON), 'utf8');

}

const handleMessageEdit = (event) => {
    const idtoEdit = event.target.getAttribute('data-elementId');
    editMessage(idtoEdit);
  }


fetchMessages();
addMessageForm.addEventListener('submit', handleAddMessage)
messagesList.addEventListener('click', handleListClick)