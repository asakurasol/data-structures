var MakeBinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

MakeBinarySearchTree.prototype.insert = function(value) {
  if (value === this.value){
    return value;
  }

  if (value < this.value) {
    if (this.left === null) {
      this.left = new MakeBinarySearchTree(value);;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new MakeBinarySearchTree(value);;
    } else {
      this.right.insert(value);
    }
  }
};

MakeBinarySearchTree.prototype.contains = function() {

};

MakeBinarySearchTree.prototype.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
