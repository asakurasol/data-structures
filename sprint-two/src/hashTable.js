var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  console.log(this.checkLimit());
  if (this.checkLimit() >= this._limit/2+1) {
    this.doubleUp();
    console.log()
  }

  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i) || makeLinkedList();
  list.addToTail(v,k);
  return this._storage.set(i, list);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i);
  if (!list) {
    return null;
  } else {
    return list.getNode(k).value;
  }
};

HashTable.prototype.remove = function(k){
  console.log(this.checkLimit());
  if(this.checkLimit() <= this._limit/2-1){
    this.half();
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.set(i, null);
};

HashTable.prototype.checkLimit = function() {
  var size = 0;

  this._storage.each(function(item) {
    if(item !== undefined) {
      size++;
    }
  });

  return size;
};

HashTable.prototype.doubleUp = function() {
  this._limit = this._limit * 2;
  this._doubleStorage = makeLimitedArray(this._limit);

  this._storage = this._doubleStorage;
};

HashTable.prototype.half = function() {
  this._limit = this._limit/2;
  this._halfStorage = makeLimitedArray(this._limit);
  this._storage = this._halfStorage;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
