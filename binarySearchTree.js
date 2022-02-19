class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null;
  }

  insert(value){
    if(this.root === null){
      const newNode = new Node(value);
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while(currentNode){
      let left = currentNode.left;
      let right = currentNode.right;
      if(value > currentNode.value){
        if(!right){
          const newNode = new Node(value);
          currentNode.right = newNode;
          break;
        }
        currentNode = right;
      }else if(value <= currentNode.value){
        if(!left){
          const newNode = new Node(value);
          currentNode.left = newNode;
          break;
        }
        currentNode = left;
      }
    }

  }

  lookup(value){
    let currentNode = this.root;
    while(currentNode){
      let left = currentNode.left;
      let right = currentNode.right;
      if(value > currentNode.value){
        currentNode = right;
      }else if(value < currentNode.value){
        currentNode = left;
      }else{
        return true;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(100));
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}