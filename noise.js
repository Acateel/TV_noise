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

window.onload = function(){
    createTable(100, 100, 2);
}