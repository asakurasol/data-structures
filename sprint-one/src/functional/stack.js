var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var top = 0;
  // Implement the methods below
  someInstance.push = function(value){
    counter++;
    storage[counter] = value;
    top = storage[counter];
  };

  someInstance.pop = function(){
    if (counter > 0) {
      var popped = storage[counter];
      delete storage[counter];
      counter--;
      return popped || top;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
