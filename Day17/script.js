const button = document.getElementById('bg-btn');
let buttonColor = document.getElementById('the-bg-color');
let body = document.querySelector('body');
let div = document.querySelector('div');
let colorArray = [ 'red' ,
                    'blue' ,
                    'green' , 
                    'teal' , 
                    'purple' ,
                    'pink' ,
                    'black' 
]

button.addEventListener('click' , () => {
    let bgColor = Math.floor(Math.random()*colorArray.length);
    for(let i=0; i <= colorArray.length; i++) {
        body.style.backgroundColor = colorArray[bgColor];
        buttonColor.innerHTML = colorArray[bgColor];
        buttonColor.style.color = colorArray[bgColor];
        
        button.style.color = colorArray[bgColor];
        button.style.border =  'solid 3px';
        div.style.border = 'none';
    }

    

})
