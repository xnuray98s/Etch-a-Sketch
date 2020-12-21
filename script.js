const container = document.querySelector("#container");


function createDivs(num = 16) {
    if (num <= 100) {
        for(let x=0; x< num**2; x++) {
            let div = document.createElement('div');
            div.className = "grid_block";
            div.style.cssText = 'border: 3px solid black;';
            container.appendChild(div);
            }
        }
        container.style.cssText = `grid-template-columns: repeat(${num}, auto);    `
    }

function changeColor() {
    const gridBlock = document.querySelectorAll('.grid_block');
    gridBlock.forEach((div) =>{
    div.addEventListener('mouseenter', function (evt){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i < 6 ; i++){
            color += letters[Math.floor(Math.random()* 16)];
        }
        div.style.backgroundColor=color;
    });
})
}

function reset() {
    const btn = document.querySelector("#reset");
    btn.addEventListener('click', function () {
        let numOfSquares = parseInt(prompt("Enter number of squares between 1 and 100:"));
        alert(numOfSquares)
        container.innerHTML = "";
        createDivs(numOfSquares);
        changeColor();
    })
}

createDivs();
changeColor();
reset();