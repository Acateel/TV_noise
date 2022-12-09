function createTable(width, height, sellSize){
    var column = Math.round(width / sellSize);
    var row = Math.round(height / sellSize);

    var table = document.getElementById("noiseTable");
    for(var i = 0; i < row; i++){
        table.innerHTML = table.innerHTML + generateRow(column);
    }

    function generateRow(sellCount){
        var row = "<tr>";
        for(var i = 0; i < sellCount; i++){
            row = row + "<td></td>";
        }
        row = row + "</tr>";
        return row;
    }
}

function drawTable(){
    var sells = document.getElementsByTagName("td");
    for (var i = 0; i < sells.length; i++){
        if(Math.round(Math.random() * 2)){
            sells[i].setAttribute("class", "white");
        } else {
            sells[i].setAttribute("class", "black");
        }
    }
}

window.onload = function(){
    var width = window.outerWidth;
    var height = window.outerHeight;

    createTable(width, height, 3);
    var id = setInterval(drawTable, 500);
}