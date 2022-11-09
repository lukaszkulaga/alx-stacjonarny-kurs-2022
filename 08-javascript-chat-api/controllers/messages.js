import fs from 'fs';
const fsp = fs.promises;


export const fetchMessages = () => {

  return fsp.readFile('data/messages.json', 'utf8')
}


export const addMessage = (message) => {
  return fsp.readFile('data/messages.json', 'utf8')
    .then(data => {
      const parsedJSON = JSON.parse(data);

      parsedJSON.messages.push(message);

      return fsp.writeFile('data/messages.json', JSON.stringify(parsedJSON), 'utf8');
    })
}

export const editMessage = (message) => {
  return fsp.readFile('data/messages.json', 'utf8')
    .then(data => {
      const parsedJSON = JSON.parse(data);

      parsedJSON.messages.forEach(element => {
        if(element.id === message.messageId){
          element.message = message.messageInput;
        }
      });

      return fsp.writeFile('data/messages.json', JSON.stringify(parsedJSON), 'utf8');
    })
}

export const removeMessages = () => {
  return fsp.readFile('data/messages.json', 'utf8')
    .then(data => {

      const parsedJSON = JSON.parse(data);
      parsedJSON.messages = [];

      return fsp.writeFile('data/messages.json', JSON.stringify(parsedJSON), 'utf8');
    })
}