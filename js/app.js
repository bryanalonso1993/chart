// define elements
const inputData = document.getElementById('pushData');



// devine events
inputData.addEventListener('click',saveDataInfo,false);
window.addEventListener('load',eligeData,false);



// define functions
function saveDataInfo() {  

}

function eligeData(){
    const nombre = prompt("Elige tu nombre");
    const apellido = prompt("Escoge tu apellido");
    if (nombre !== "" && apellido !== ""){
        localStorage.setItem(nombre);
    }else{
        window.alert("please check data");
    }
}