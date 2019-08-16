var cars = ["Doc", "Dopey", "Bashful", "Grumpy"]
function dwarfRollCall(dwarves) {
  var bag  = '';
  for(var i = 0; i<dwarves.length/2; i++){
  bag += (`${i+1}. ${dwarves[i]} `)
  }
  
return bag
}
dwarfRollCall(cars)


var words = ["earth", "wind", "fire", "water", "heart"]
function summonCaptainPlanet(planeteerCalls){
  var basket = [];
  for(var cars  of planeteerCalls){
  basket.push(cars.toUpperCase() + "!")
}
return basket
}
summonCaptainPlanet(words)
var elements = ["earth", "wind", "heart", "fire"]
function longPlaneteerCalls(words) {
  for(var elements of words){
    if(elements.length>4){
      return true;
    } 
  }
      return false;
}

function findTheCheese (foods){
  var cheesetype = [ "cheddar","gouda","camembert", "swiss"]
  
  for(var snack of foods){
    if(cheesetype.includes(snack)){
      return snack;
    }
  }
return 'no cheese!'
}

function wordWithB(words){
  var i = ""
  for(i=0; i<words.length; i++){
    if(words.length[i] === b)
  }
  
}function wordWithB(words){
  var i = ""
  for(i=0; i<words.length; i++){
    if(words[i].startsWith ("b"){
    basket.push(words[i])
  }
  }
}


