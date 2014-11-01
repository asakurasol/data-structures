var BloomFilter = function(limit) {
  this._limit = limit;
  this._storage = makeLimitedArray(limit);
};

BloomFilter.prototype.set = function(key) {
  var indexes = [];
  var self = this;

  indexes.push(getIndexBelowMaxForKey(key, this._limit));
  indexes.push(hashFuncTwo(key, this._limit));
  indexes.push(hashFuncThree(key, this._limit));

  _.each(indexes, function(index) {
    self._storage.set(index, true);
  });
};

BloomFilter.prototype.get = function(key) {
  var i = this._storage.get(getIndexBelowMaxForKey(key, this._limit));
  var j = this._storage.get(hashFuncTwo(key, this._limit));
  var k = this._storage.get(hashFuncThree(key, this._limit));

  return i && j && k;
};

//  Random 3 letter generator
var makeId = function() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 3; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

var randomStrings = [];


for(var i = 0; i< 220; i++){
  randomStrings.push(makeId());
}
// Forcing unique strings
randomStrings = _.unique(randomStrings);

//Run Tests
