// create table row and sells and past its in table with id noiseTable. Witdh, height and sellSize take in pixels.
function createTable(width, height, sellSize){
    //match count of sells in table
    var column = Math.round(width / sellSize);
    var row = Math.round(height / sellSize);

    var table = document.getElementById("noiseTable");
    // Generate table
    for(var i = 0; i < row; i++){
        table.appendChild(generateRow(column));
    }

    // Generate one table's row
    function generateRow(sellCount){
        var row = document.createElement("tr");
        for(var i = 0; i < sellCount; i++){
            var sell = document.createElement("td")
            row.appendChild(sell);
        }
        return row;
    }
}

// change collor of all sells
function drawTable(){
    var sells = document.getElementsByTagName("td");
    for (var i = 0; i < sells.length; i++){
        if(Math.round(Math.random() * 2)){ // take random true of false
            sells[i].setAttribute("class", "white"); // change color to white
        } else {
            sells[i].setAttribute("class", "black"); // change color to black
        }
    }
}

// set button to stop or start noise
function setStopButton(func, time){
    var id = setInterval(func, time);
    var running = true;

    // add Event handler to press Enter
    document.body.addEventListener("keypress", function(event) {
        if (event.key == "Enter"){
            clickClack();
        }
    });

    // stop or start noise
    function clickClack(){
        if(running){
            clearInterval(id);
            running = false;
        } else {
            id = setInterval(func, time);
            running = true;
        }
    };
}

window.onload = function(){
    // take size of page
    var width = window.outerWidth;
    var height = window.outerHeight;

    createTable(width, height, 3);
    setStopButton(drawTable, 100);
}