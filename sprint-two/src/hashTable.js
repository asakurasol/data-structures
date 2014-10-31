var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  if (this.checkLimit()+1 >= (this._limit * 0.75)) {
    this.scale(true);
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
  if(this.checkLimit()-1 <= (this._limit * 0.25)){
    this.scale(false);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  // fix null bug
  return this._storage.set(i, null);
};

HashTable.prototype.checkLimit = function() {
  var size = 0;

  this._storage.each(function(item) {
    if(item) {
      size++;
    }
  });

  return size;
};

HashTable.prototype.scale = function(bool) {
  var self = this;
  var oldStorage = self._storage;
  if (bool) {
    self._limit = self._limit * 2;
  } else {
    self._limit = self._limit / 2;
  }

  self._doubleStorage = makeLimitedArray(self._limit);

  self._storage = self._doubleStorage;

  oldStorage.each(function(item, index, storage) {
    if (item) {
      item.each(function(node) {
        self.insert(node.key, node.value);
      });
    }
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// Hashtable.prototype.insert(): O(n)
// Hashtable.prototype.retrieve(): O(1)
// Hashtable.prototype.remove(): O(n)
