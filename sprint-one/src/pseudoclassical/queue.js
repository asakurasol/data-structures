var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.heads = 0;
  this.tails = 0;
};

Queue.prototype.enqueue = function(value) {
  this.heads++;
  this.storage[this.heads] = value;
};

Queue.prototype.dequeue = function() {
  if (this.heads - this.tails > 0) {
    this.tails++;
    var result = this.storage[this.tails];
    delete this.storage[this.tails];
    return result;
  }
};

Queue.prototype.size= function() {
  return this.heads - this.tails;
};


