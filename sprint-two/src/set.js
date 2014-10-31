var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage = this._storage || {};

  this._storage[item] = null;
};

setPrototype.contains = function(item){
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// setPrototype.add: O(1)
// setPrototype.contains: O(1)
// setPrototype.remove: O(1)
