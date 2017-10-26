var nrOfSquares=8;
var contentDiv=document.getElementById("content");

var board=document.createElement("div");
board.className="board";


for(var y = 0; y < nrOfSquares; y++){
  var row =  addRowToBoard();
for(var x=0; x<nrOfSquares; x++){
    var square= document.createElement("div");
    square.className="square";
    if((x+y)%2){
        square.style.backgroundColor="black"
        }else{
        square.style.backgroundColor="white"
        }
    row.appendChild(square);
}
}

contentDiv.appendChild(board);

function addRowToBoard(){
        
        var row= document.createElement("div")
        row.className="row";
        
        
        if(y%2){
        row.style.backgroundColor="black"
        }else{
        row.style.backgroundColor="white"
        }

        
        board.appendChild(row);
        return row;
}

