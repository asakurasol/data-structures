var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var heads = 0;
  var tails = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    heads++;
    storage[heads] = value;
  };

  someInstance.dequeue = function(){
    if ((heads - tails) > 0) {
      tails++;
      var results = storage[tails];
      delete storage[tails];
      return results;
    }
  };

  someInstance.size = function(){
    return heads - tails;
  };

  return someInstance;
};
