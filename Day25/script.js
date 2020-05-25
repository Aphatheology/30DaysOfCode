let desc = document.getElementById('desc');
let submit = document.getElementById('submit');
let locationInput = document.getElementById('locationinput');

let city = document.getElementById('city');
let temp = document.getElementById('temp');


submit.addEventListener('click' , () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+locationInput.value+'&appid=b89ede41728149e8a586edfe82cea94e')
    .then(response => response.json())
    .then(data =>
    
    { 
      let  cityData = data['name'];
       let tempData = data['main']['temp'];
       let descData = data['weather'][0]['description'];
        desc.innerHTML = cityData + " recent Weather can be described as: " + descData;
        city.innerHTML = 'Below is a mini Weather report about ' +  cityData;
        temp.innerHTML = cityData + " is at a temperature of: " + (tempData - 273.15) + 'C';
        
        
        
    }) 
    
  .catch(err => alert("City not recognized!"));
})



// console.log(submit);
// console.log(locationInput);
// console.log(city;
// console.log(temp);
// console.log(desc);