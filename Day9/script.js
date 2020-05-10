const orderButton = document.querySelector(".action");
const orderForm = document.querySelector(".placeorder");

let newOrder1 = document.getElementById("order1");
let newOrder2 = document.getElementById("order2");
let newOrder3 = document.getElementById("order3");
let newOrder4 = document.getElementById("order4");
let newOrder5 = document.getElementById("order5");
let newOrder6 = document.getElementById("order6");

let closeButton = document.getElementById("close");




 

// orderButton.addEventListener('click' , () => {
//     orderForm.style.display = "block";
//     console.log(orderButton); 
// })

newOrder1.addEventListener('click' , () => {
    orderForm.style.display = "block";
})

newOrder2.addEventListener('click' , () => {
    orderForm.style.display = "block";
})

newOrder3.addEventListener('click' , () => {
    orderForm.style.display = "block";
})

newOrder4.addEventListener('click' , () => {
    orderForm.style.display = "block"; 
})

newOrder5.addEventListener('click' , () => {
    orderForm.style.display = "block"; 
})

newOrder6.addEventListener('click' , () => {
    orderForm.style.display = "block"; 
})

closeButton.addEventListener('click' , () => {
    orderForm.style.display = "none";
    
})