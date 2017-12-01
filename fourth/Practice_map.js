
var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback){
  newArray = [];
  arr.forEach(function(item){
    newArray.push(callback(item));
  });
  return newArray;
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
