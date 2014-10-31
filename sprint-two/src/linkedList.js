var makeLinkedList = function(){
  var list = {};
  var id = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value, key){
    id++;
    list[id] = makeNode(value, key);

    if (list.head === null) {
      list.head = list[id];
    }

    if (list.tail !== null) {
      list.tail.next = list[id];
    }

    list.tail = list[id];
  };

  list.removeHead = function(){
    var newHead = list.head.next;
    var oldValue = list.head.value;

    delete list.head;
    list.head = newHead;
    return oldValue;
  };

  list.contains = function(target){
    var recurse = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null){
        return false;
      } else {
        return recurse(node.next);
      }
    };
    return recurse(list.head);
  };
  //hash helper function
  list.getNode = function(k){
    var recurse = function(node){
      if(node.key === k){
        return node;
      } else if (node.next === null){
        return null;
      } else {
        return recurse(node.next);
      }
    };
    return recurse(list.head);
  }

  return list;
};

var makeNode = function(value, key){
  var node = {};

  node.value = value;
  node.key = key;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
//Add to Tail : O(1)
//removeHead: O(1)
//contains: O(n)
