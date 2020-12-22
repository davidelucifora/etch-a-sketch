/* 1. take the number of squares of one side as Input.
Might be nice to have a way for the user to select a
16x16, 32x32, 64x64. A slider or a option selector maybe

Then multiply that number by itself will give the number of divs
and then I basically need to stack them on a grid layout.

Can use CSS grid and assign the number to template columns and rows
Look into FlexBox just in case.
*/

const gridContainer = document.getElementById('grid');

let width = 16;

function createGrid(width){
    for (let i = 0; i < width * width; i++){
        let newCell = document.createElement('div')
        newCell.classList.add('grid-cell');
        gridContainer.appendChild(newCell);
    }
    gridContainer.style.borderRight = '1px solid black';
    gridContainer.style.borderBottom = '1px solid black';
}

createGrid(width)