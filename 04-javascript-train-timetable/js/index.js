
const searchButton = document.querySelector('#searchButton');
const trainList = document.querySelector('#trainList');

const renderTrain = (trainToRender) => {
    trainList.innerHTML += `
      <li>
        <p>${trainToRender.from} - <strong>${trainToRender.to}</strong></p>
      </li>
    `
  }

fetch('http://localhost:5000/trains')
.then((response) => {

   return response.json();
})
.then( (data) => {

    data.forEach((train) => {
        renderTrain(train);
      })

})
.catch ((error) => {
    console.log(error);
})



const handleSubmit = (event) => {
    event.preventDefault();
  

    console.log(trainList);


  }


  searchButton.addEventListener('click', handleSubmit);


