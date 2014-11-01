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

/**
*   Begin Testing BloomFilter for False Positives
**/
var randomStrings = [];

//  Random 3 letter generator
var makeId = function() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for(var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

var fillRandomStrings = function(){
  randomStrings = [];
  for(var i = 0; i< 600; i++){
    randomStrings.push(makeId());
  }
  // Forcing unique strings
  randomStrings = _.unique(randomStrings);
};

var falsePositiveTest = function(){
  var results = [];
  for(var i = 0; i < 50; i++){
    var bloomFilter = new BloomFilter(18);
    var falsePositiveCounts = 0;

    // Populate random strings array
    fillRandomStrings();

    // Setting i number of random strings
    for(var k = 0; k <= i; k++) {
      bloomFilter.set(randomStrings[k]);
    }
    // Attempting false positives
    for(var j = (i + 1); j < (i + 501); j++){
      if(bloomFilter.get(randomStrings[j])) {
        falsePositiveCounts++
      }
    }
    results.push(Math.abs(falsePositiveCounts/5) + "%");
  }
  console.log(results);
}();  // <-- Immediate call














