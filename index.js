let container = document.getElementById("root");
let buttonStart = document.getElementById("buttonStart");

let arry = [1, 2, 3, 4, 5, 6];

function addUp(arr){
    let newNums = 0;
    let numsState = false;

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            newNums += arr[i];
            numsState = true;
        }
    }
    if(numsState){
        container.innerText = `${newNums}`;
    } else {
        container.innerText = `Please provide a correct value`;
    }
}

buttonStart.addEventListener("click", function() {
    addUp(arry);
});