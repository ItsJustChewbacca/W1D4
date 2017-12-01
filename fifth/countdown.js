 function countdownGenerator(x) {
    // var myRocketsLaunched -> rocketsLaunched

    return function countdown() {

      if( x > 0) {
        //return
        console.log ("T-minus", x, "...")
      }
      if( x === 0){
        //return
        console.log ("Blast Off from ");
      }
      if( x < 0){
        //return
        console.log("Rockets already gone, bub!");
      }
      x--
    }
  };
 var countdown = countdownGenerator(3)

countdown(); // T-minus 3..
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!