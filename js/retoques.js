function consultarApiExterna(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then( response => {
            return response.json();
        }).then(dataResult =>{
            console.log(dataResult);
        }).catch(error => {
            console.log(error);
        })
}

window.addEventListener('load',consultarApiExterna);