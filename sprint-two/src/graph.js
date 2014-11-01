var Graph = function(){
  this.nodeStorage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodeStorage[newNode] = {};
  var keys = Object.keys(this.nodeStorage);

  if (keys.length === 2 ){
    this.addEdge(keys[0], keys[1]);
  }
  if (toNode) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return !!this.nodeStorage[node];
};

Graph.prototype.removeNode = function(node){
  delete this.nodeStorage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodeStorage[fromNode].hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodeStorage[fromNode][toNode] = null;
  this.nodeStorage[toNode][fromNode] = null;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.getEdge(fromNode, toNode)) {
    delete this.nodeStorage[fromNode][toNode];
    delete this.nodeStorage[toNode][fromNode];

    if (Object.keys(this.nodeStorage[fromNode]).length === 0) {
      delete this.nodeStorage[fromNode];
    }

    if (Object.keys(this.nodeStorage[toNode]).length === 0) {
      delete this.nodeStorage[toNode];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
