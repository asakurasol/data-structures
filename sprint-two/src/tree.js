var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.id = 0;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  this.id++;
  if(this.children === undefined){
    this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  } else if(this.children) {
    var result = false
    for(var i = 0; i<this.children.length; i++){
      if(this.children[i].contains(target)){
        result = true;
      };
    }
    return result
  } else {
    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
