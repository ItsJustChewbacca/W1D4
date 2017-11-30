function findWaldo(arr, found) {
  //for (var i = 0; i < arr.length; i++) {
      //var index = i
  arr.forEach(function( Value, index, Array) {
    if (Value === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index", index, "!")
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);