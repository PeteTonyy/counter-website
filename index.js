let saveEl = document.getElementById("save-el") 
let countEl = document.getElementById("count-el") 
let count = 0 
let saveCounter = 0 
let prev = "Previous entries: "

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    if (event.keyCode == 38) // up arrow
        document.getElementById('increment-btn').click();
    else if (event.keyCode == 40) // down arrow
        document.getElementById("decrease-btn").click();
    else if (event.keyCode == 13 || event.keyCode == 83) // enter key
        document.getElementById("save-btn").click();
    
})


function resetEntries(){ 
    document.getElementById("save-el").innerHTML = prev; 
} 

function increment() {
    count += 1 
    countEl.textContent = count 
    document.getElementById("count-el").style.color = 
    'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    if (saveCounter > 4){ 
        resetEntries(saveCounter) 
        saveCounter = 0; 
    } 
} 

function randomColor() {
     document.querySelector(".container").style.borderColor = 
     'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
}

function save() { 
    let countStr = count + " - " 
    if (saveCounter > 3)
        countStr = count
    saveEl.textContent += countStr 
    if (saveCounter > 4){ 
        resetEntries(saveCounter) 
        saveCounter = 0 
    } 
    countEl.textContent = 0 
    count = 0 
    saveCounter++; 
} 

function decrease(){ 
    if (count > 0)
        count--; 
    countEl.textContent = count 
} 
