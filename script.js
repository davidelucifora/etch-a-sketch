/* 1. take the number of squares of one side as Input.
Might be nice to have a way for the user to select a
16x16, 32x32, 64x64. A slider or a option selector maybe

Then multiply that number by itself will give the number of divs
and then I basically need to stack them on a grid layout.

Can use CSS grid and assign the number to template columns and rows
Look into FlexBox just in case.
*/

const gridContainer = document.getElementById('grid');
const widthSlider = document.getElementById('width-slider');
const gridSizeOutput = document.getElementById('grid-size');
const generateBtn = document.getElementById('generate-grid');
const colorPicker = document.getElementById('color-picker'); 
const randomColorButton = document.getElementById('random-button');
const warmColorButton = document.getElementById('warm-button');
const coldColorButton = document.getElementById('cold-button');
const eraseBtn = document.getElementById('erase-btn');
let color = chooseColor()

gridSizeOutput.innerHTML = widthSlider.value;

createGrid(16);

 // App Controls Functions:

// Dynamically display grid size choice when moving slider
 widthSlider.addEventListener('input', function(){               
    let width = widthSlider.value;
    gridSizeOutput.textContent = width;
});
// Launch createGrid() function when clicking generate grid
generateBtn.addEventListener('click', function(){               
    width = widthSlider.value;
    createGrid(width);
});
// Remove active class from color buttons if using color picker
colorPicker.addEventListener('click', function(){               
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('color-btn-active');
    })
})
// Random color button
randomColorButton.addEventListener('click', function(e){
    warmColorButton.classList.remove('color-btn-active')
    coldColorButton.classList.remove('color-btn-active')
    e.target.classList.toggle('color-btn-active');
});
// Warm color button
warmColorButton.addEventListener('click', function(e){
    randomColorButton.classList.remove('color-btn-active')
    coldColorButton.classList.remove('color-btn-active')
    e.target.classList.toggle('color-btn-active');
});
// Cold color button
coldColorButton.addEventListener('click', function(e){
    warmColorButton.classList.remove('color-btn-active')
    randomColorButton.classList.remove('color-btn-active')
    e.target.classList.toggle('color-btn-active');
});
// Erase grid button
eraseBtn.addEventListener('click', function(e){
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
});


function createGrid(width){
    // Clean Up previous Grid
    gridContainer.textContent = '';
    // Update Grid Template CSS values
    gridContainer.style.gridTemplateColumns = `repeat(${width}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${width}, auto)`;   
    // Create Grid 
    for (let i = 0; i < width * width; i++){
        let newCell = document.createElement('div')
        newCell.classList.add('grid-cell');
        gridContainer.appendChild(newCell);
    }
    gridContainer.style.borderRight = '1px solid var(--pale-cerulean)';
    gridContainer.style.borderBottom = '1px solid var(--pale-cerulean)';

    let cell = document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.addEventListener('mouseover', function(){
            this.style.backgroundColor = chooseColor();
        })
        });
}
//Assign value of variable color based on choice
function chooseColor(){
    if (randomColorButton.classList.contains('color-btn-active')){
        return `rgb(${randomRange(0,255)},${randomRange(0,255)},${randomRange(0,255)})`
    }
    else if (coldColorButton.classList.contains('color-btn-active')){
        return `rgb(0,${randomRange(50,255)},${randomRange(50,255)})`
    }
    else if (warmColorButton.classList.contains('color-btn-active')){
        return `rgb(${randomRange(255,255)},${randomRange(0,255 )},0)`
    }
    else {
        return colorPicker.value
    }
}
// Generate random range for RGB colors
function randomRange(min, max){
    return Math.floor(Math.random()*(max - min) + min)
}


