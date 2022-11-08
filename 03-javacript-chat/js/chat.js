import { v4 as uuidv4 } from 'uuid'; 

// stwórz aplikacje chat która zawiera okno chatu i formularz wpisywania wiadomosci 

// formularz ma miec 2 inputy - author i message
// okno chatu niech wyswietla wyslane wiadomosci wraz z jego autorem
// wiadomosci zapisz jako tablica obiektów i umiesc je w localstorage
// po wejsciu mna strone przeczytaj wiadomosci z local storage

// * dodatkowe

// nad oknem chatu zrób header z searchem (input + przycisk search). 
// po wcisnieciu przycisku przefiltruj wiadomosci. filtruj tylko po message.

// ostyluj wszystko

// odczytywanie i zapisywanie do localstorage 


const chatForm = document.querySelector('#chatForm');
const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');
const messageList = document.querySelector('#messageList')

// const messagesFromLS = JSON.parse(localStorage.getItem('messages'));
let messages = [];

// Warunek sprawdza czy sa jakies rzeczy w LS, zeby w razie czego powinna byc pusta tablica
// Musi byc tablica, bo pozniej uzywamy forEach, ktory jest funkcja tablicowa.
// if(messagesFromLS) {
//   messages = messagesFromLS;
// }

// * ES9 ?? nullish operator
// const messages = JSON.parse(localStorage.getItem('messages')) ?? []

const renderMessage = (messageToRender) => {
  messageList.innerHTML += `
    <li>
      <p>${messageToRender.message} - <strong>${messageToRender.author}</strong></p>
    </li>
  `
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newMessage = {
    id: uuidv4(),
    author: authorInput.value,
    message: messageInput.value
  }


fetch('http://localhost:5000/messages', {
    method: 'POST',
    headers: {
      'Content-type': "application/json"
    },
    body: JSON.stringify(newMessage)
  })

  renderMessage(newMessage);

  messageInput.value = ''
  authorInput.value = ''
}

chatForm.addEventListener('submit', handleSubmit)

// ten forEach został zastąpiony fetch

// messages.forEach((message) => {
//   renderMessage(message);
// })





// Asynchronicznosc i Promise

// Synchroniczny
console.log('Pierwsza akcja');
console.log('Druga akcja');
console.log('Trzecia akcja');

// Asynchroniczny

// Node.JS - Odczyt, zapis pliku

// JS - funkcje czasowe (setInternal, setTimeout)
//   setInterval - funkcja ktora wykonuje sie co jakis czas (zdefiniowany)
//   setTimeout - funkcja, ktora odpali sie raz, po jakims opoznieniu

// Promise - Wbudowany obiekt w JS, sluzy do polaczen HTTP (czyli np. po realne dane)


console.log('-----------------------------------')
console.log('Asynchronicznosc');

console.log('Czynnosc 1');

// setTimeout(funkcjaKtoraSieUruchomiPoOpoznieniu, jakieOpoznienieWMilisekundach)
setTimeout(() => {
  // Ta funckja jest wkladana na koniec stosu (Event Queue)
  console.log('Czynnosc 2');  
}, 0)

console.log('Czynnosc 3');







// Promise - wbudowany obiekt w JS, sluzacy do obslugi asynchronicznosci

// HTTP - Zasady komunikacji miedzy komputerami

// 1. Request i Response Cycle
  // w http zawsze pierwszy musi isc request, a dopiero pozniej response*
  // * istnieje tzw http push, gdzie serwer moze inicjowac polaczenie

  // Request

//   Naglowki HTTP

//   GET - prosba o pobranie danych z serwera
//   POST - prosba o wyslanie danych do serwera
//   DELETE - prosba o usuniecie danych z serwera
//   PUT - prosba o edycje danych z serwera (ew jesli nie ma danego zasobu, tworzy go)
//   PATCH - proba o edycje danych z serwera (tylko do zmiany juz istniejacego zasobu)

//   Response

//   HTTP Status Codes

//   404 - Not Found (prosimy o dane, ale serwer nie moze tego znalezc)
//   200 - OK (ok, zrozumielismy twoj request, oto wynik)
//   201 - OK, created (twoje zapytanie jest ok i utworzylismy nowy zasob)
//   500 - Server Error (twoj request jest ok, ale serwer dziala nieprawidlowo)
//   301 - Moved temporarily
//   302 - Moved permamently


//   HTTP Headers

//   Content-Type - informuje serwer, jaki format danych wysylamy lub 
//                  jaki format danych oczekujemy

//   Authorization - przekasujemy do serwera token (JWT Token), 
//                   ktory authoryzuje nas jako uprawionych do korzystania z serwera


//  HTTP Parameters

// GET - params (queryparams)
// POST - body 
// PUT - body
// DELETE - params (queryparams)







// promise i korzystanie z biblioteki fetch

// promise - obiekt wbudowany do asynchronicznosci

// Stany:
//  - pending - promise w trakcie wykonywania
//  - fullfilled - poprawne wykonanie promise
      // funkcja then  
//  - rejected - promise zostal wykonany i sie nie udał
      // funkcja catch

fetch('http://localhost:5000/messages')
    .then((response) => {

       return response.json(); // json to wbudowana metoda w fetch - wyłuskanie wartości zapytania http
    })
    .then( (data) => {

        // console.log(data);

        data.forEach((message) => {
            renderMessage(message);
          })

    })
    .catch ((error) => {
        console.log(error);
    })


    // snipped do zapytan http GET

    // fetch('link')
    // .then((response) => {

    //    return response.json();
    // })
    // .then( (data) => {

    //     console.log(data);
    // })
    // .catch ((error) => {
    //     console.log(error);
    // })


 // wysyłanie danych http

 // snipped do post
 // uwaga - pole id jest wymagane przy POST i PUT

//  const messageToSend = {
//     id: uuidv4(),
//     message: 'Tresc wyslana do serwera',
//     author: 'Damian'
//   }
  
//   fetch('http://localhost:5000/messages', {
//     method: 'POST',
//     headers: {
//       'Content-type': "application/json"
//     },
//     body: JSON.stringify(messageToSend)
//   })

