var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.heads = 0;
  someInstance.tails = 0;

  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    this.heads++;
    this.storage[this.heads] = value;
  },
  dequeue: function() {
    if((this.heads - this.tails)>0){
      this.tails++;
      var result = this.storage[this.tails];
      delete this.storage[this.tails];
      return result;
    }
  },
  size: function() {
    return this.heads-this.tails;
  }
};
