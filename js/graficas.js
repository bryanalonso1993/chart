// define variables
const callDataBackend = document.getElementById('call-data');

//getDataBackend
function ResponseDataServer(url){
    this.url = url;
}

ResponseDataServer.prototype = {
    getDataServerIris: function () {
        fetch(this.url,{method:'GET'}).then( data => {
            return data.json();
        }).then( processData => {
            let pushDataSepallength = [],
                pushDataspecies = [];
            processData.forEach(element => {
                pushDataSepallength.push(element.sepallength);
                pushDataspecies.push(element.species);
            });
            let ctx = document.getElementById('myChart2').getContext('2d');
            let objectChart = new PlottingStadistics(pushDataspecies,"Estadisticas",pushDataSepallength,"#9999ff");
            objectChart.addChart(ctx,'bar');

        }).catch( er => {
            console.log(er);
        });      
    },
    getDataServerSilver: function () {
        fetch(this.url,{method: 'GET'}).then( data => {
            return data.json();
        }).then( processData => {
            let pushDataYear = [],
                pushDataSpecies = [];
            processData.forEach( element => {
                pushDataYear.push(element.year);
                pushDataSpecies.push(element.situados_paid);
            });
            let ctx = document.getElementById('myChart1').getContext('2d');
            let objectChart2 = new PlottingStadistics(pushDataYear, "Estadisticas Especiales",pushDataSpecies,"#ecc6d9");
            objectChart2.addChart(ctx, 'line');
        }).catch( er => {
            console.log("Error en la petición ...", er)
        });
    },
    getCurrentAlarms: function () {
        fetch(this.url,{method:'GET'}).then( data => {
            return data.json();
        }).then( processData => {
            let pushDataSepalLength = [],
                pushDataSepalWidth = [],
                pushDataPetalLength = [],
                pushDataLabels = [];
            processData.forEach( function (element) {
                pushDataSepalLength.push(element.sepallength);
                pushDataSepalWidth.push(element.sepalwidth);
                pushDataPetalLength.push(element.petallength);
                pushDataLabels.push(element.species);
            });
            let arrayDataPush = [pushDataSepalWidth,pushDataSepalLength,pushDataPetalLength];
            let listResult = [],
                labels = ["red label","blue label","green label"],
                colours = ["#b3d9ff","#ff4000","#99ffeb"];
            for (let index = 0 ;index < arrayDataPush.length;index++){
                listResult.push({
                    label: labels[index],
                    data : arrayDataPush[index],
                    backgroundColor: colours[index]
                });
            }
            let ctx = document.getElementById('myChart3').getContext('2d');
            let objectChart3 = new PlottingStadistics(pushDataLabels,labels,"",colours);
            objectChart3.addCharts(ctx,'line',listResult);
        }).catch(err => {
            console.log("error in process data Server",err);
        });
        //let ctx = document.getElementById('myChart3').getContext('2d');
        //let objectChart3 = new PlottingStadistics();

    }
};

function PlottingStadistics(labels,labelTitle, data, colour){
    this.labels = labels;
    this.labelTitle = labelTitle;
    this.data = data;
    this.colour = colour;
}

PlottingStadistics.prototype = {
    addChart: function (ctx, typeChart) {
        return new Chart(ctx, {
            type: typeChart,
            data: {
                labels: this.labels,
                datasets: [{
                    label: this.labelTitle,
                    data: this.data,
                    backgroundColor: this.colour,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {yAxes: [{ticks: {beginAtZero: true}}]}
            }
        });
    },
    addCharts: function (ctx, typeChart, dataJson) {
        return new Chart(ctx,{
            type: typeChart,
            data:{
                labels: this.labels,
                datasets: dataJson
            },
            options: {
                scales: {yAxes: [{ticks: {beginAtZero: true}}]}
            }
        });
    }
};


// decorators
function callDataChart(e) {  
    e.preventDefault();
    // Call Data Plot Iris
    const specie = document.getElementById('species').value;
    const responseData = new ResponseDataServer("http://localhost/proyecto_angular/backend/iris.php?species="+specie);
    responseData.getDataServerIris();
    // Call Data Plot Year
    const year = document.getElementById('anio').value;
    const responseDataYear = new ResponseDataServer("http://localhost/proyecto_angular/backend/spanishsilver.php?anio="+year);
    responseDataYear.getDataServerSilver();
    // Call mixed Plot Data Iris
    responseData.getCurrentAlarms();
}

// call events
callDataBackend.addEventListener('click', callDataChart ,false);