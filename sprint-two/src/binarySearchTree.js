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
      this.left = new MakeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new MakeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

MakeBinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    if (this.right === null) {
      return false;
    } else {
      return  this.right.contains(value);
    }
  }
};

MakeBinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }

  if (this.right !== null) {
      this.right.depthFirstLog(callback);
  }

};

MakeBinarySearchTree.prototype.minLength = function(node) {
  if(node === undefined){
    node = this;
  }
  if(node === null){
    return 0;
  }
  return 1 + Math.min(this.minLength(node.left),this.minLength(node.right));
};

MakeBinarySearchTree.prototype.maxLength = function(node) {
  if(node === undefined){
    node = this;
  }
  if(node === null){
    return 0;
  }
  return 1 + Math.max(this.maxLength(node.left),this.maxLength(node.right));
};

MakeBinarySearchTree.prototype.isBalanced = function() {
  if(Math.abs(this.maxLength() - this.minLength()) <= 1){
    return true;
  }
  return false;
};

//Given a sorted array, figure out algorithm to best fit it in a binarySearchTree

var sortedArray = [1,2,3,4,5,10,20]

//find mid point of array -> floor(length of array / 2)
//insert mid point

//do the same for array to the left and right

function balancedInsert(array, tree){
  var midPoint = Math.floor(array.length/2);
  var left = array.slice(0, midPoint);
  var right = array.slice(midPoint+1);
  if(array.length === 0) {
    return;
  }
  if(!tree){
    tree = new MakeBinarySearchTree(array[midPoint])
  } else {
    tree.insert(array[midPoint])
  }
  balancedInsert(left, tree);
  balancedInsert(right, tree);
  return tree;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
// MakeBinarySearchTree.prototype.insert(): O(log n)
// MakeBinarySearchTree.prototype.contains(): O(log n)
// MakeBinarySearchTree.prototype.depthFirstLog(): O(n)
