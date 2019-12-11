var currentPlayer = "X";
 var turnCount= 0
  Boolean(false)
  let tile1= "" 
  let tile2=""
  let tile3=""
  let tile4=""
  let tile5=""
  let tile6=""
  let tile7=""
  let tile8=""
  let tile9=""
  function performLogic(buttonId, titleId) {
      $(buttonId).hide();
      $(titleId).html(currentPlayer)
      if (currentPlayer=== "X") {
          currentPlayer="O"
      } else {
          currentPlayer="X"
      }
      turnCount+=1;
      console.log(turnCount);
      if (turnCount===9) {
        alert("It's a Draw!");
      } 
      getWinner();
  }
  function getWinner() {
      console.log("winner");

      console.log(tile1, tile2, tile3)
      if(tile1 === tile2 && tile2 === tile3){
          console.log('test')
          alert(currentPlayer+ " Winner" );
      } else if(tile4=== tile5 && tile5 === tile6) {
           alert(currentPlayer+ " Winner" );
      }else if(tile7=== tile8 && tile8 === tile9) {
           alert(currentPlayer+ " Winner" );
      } else if(tile7=== tile8 && tile8 === tile9) {
           alert(currentPlayer+ " Winner" );
      } else if(tile2=== tile5 && tile5 === tile6) {
           alert(currentPlayer+ " Winner" );
      } else if(tile3=== tile6 && tile6=== tile9) {
           alert(currentPlayer+ " Winner" );
      } else if(tile1=== tile5 && tile5 === tile9) {
           alert(currentPlayer+ " Winner" );
      } else {
          alert(currentPlayer+ " Winner" );
      }
      
      
  }




$("#button1").click(function() {
    console.log('clicked!')
    tile1= currentPlayer
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
   tile2=currentPlayer
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
   tile3=currentPlayer
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
   tile4=currentPlayer
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
   tile5=currentPlayer
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
   tile6=currentPlayer
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
   tile7=currentPlayer
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    tile8=currentPlayer
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
   tile9=currentPlayer
    performLogic("#button9","#tile9");
});

