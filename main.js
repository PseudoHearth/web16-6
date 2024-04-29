
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');


var isFirstClick1 = true;
var isFirstClick2 = true;
var isFirstClick3 = true;

function handleClick(event) {

    if (event.target.id === 'input1' && isFirstClick1) {
        alert(event.target.value);
        isFirstClick1 = false;
    } else if (event.target.id === 'input2' && isFirstClick2) {
        alert(event.target.value);
        isFirstClick2 = false;
    } else if (event.target.id === 'input3' && isFirstClick3) {
        alert(event.target.value);
        isFirstClick3 = false;
    }
}


input1.addEventListener('click', handleClick);
input2.addEventListener('click', handleClick);
input3.addEventListener('click', handleClick);