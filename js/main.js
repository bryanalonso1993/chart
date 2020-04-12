// https://www.creativosonline.org/blog/formularios-css-html.html
// https://developer.oracle.com/dsl/prez-python-queries.html
// https://developer.cisco.com/learning/lab/sbx-intro-aci-02_programmability-options/step/5

'use strict';

// variables
const btnSendData = document.getElementById('btnSendData');



// functions
function callBackendData (e){
    e.preventDefault();
    let breederValue = document.getElementById('breeder').value;
    let url = "http://localhost/proyecto_angular/backend/conexion.php?breeder=";
    url += breederValue;
    fetch(url)
        .then( responseData => {
            return responseData.json();
        })
        .then( data => {
            let html = '';
            data.forEach(element => {
                html += `<tr>
                            <td>${element.arrival}</td>
                            <td>${element.breeder}</td>
                            <td>${element.color}</td>
                            <td>${element.elegible}</td>
                            <td>${element.name}</td>
                            <td>${element.pigeon}</td>
                            <td>${element.pos}</td>
                            <td>${element.sex}</td>
                            <td>${element.speed}</td>
                            <td>${element.towin}</td>
                        </tr>`
            });
            document.getElementById('insert_table_php').innerHTML = html;
        
        })
        .catch( error => {
            console.log("Error in query backend ..." + error);
        });
}

function callGraphs(){
    const myGraphs = document.getElementById('myChart').getContext('2d');
    let cx = new Chart(

    );
}

function callBackFunctions( myFn ){
    // function return call back other functions
    return myFn();
}


// call events

btnSendData.addEventListener('click' , callBackendData );