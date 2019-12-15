class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }
}

const commonAncestor = (root, p, q) => {
  // check if either node is not in the tree of if one covers the other
  if (!covers(root, p) || !covers(root, q)) return null
  else if (covers(p, q)) return p
  else if (covers(q, p)) return q

  // traverse upwards until you find a node that covers q
  let sibling = getSibling(p)
  let parent = p.parent

  while(!covers(sibling, q)) {
    sibling = getSibling(parent)
    parent = parent.parent
  }

  return parent.value
}

const covers = (root, node) => {
  if (!root) return false
  if (root === node) return true
  return covers(root.left, node) || covers(root.right, node)
}

const getSibling = node => {
  if (!node || !node.parent) return null

  const parent = node.parent
  return parent.left == node ? parent.right : parent.left
}

const root = new Node(20)
root.right = new Node(30)
root.left = new Node(10)
root.right.parent = root
root.left.parent = root

root.left.left = new Node(5)
root.left.right = new Node(15)
root.left.left.parent = root.left
root.left.right.parent = root.left

root.left.right.right = new Node(17)
root.left.right.right.parent = root.left.right

root.left.left.left = new Node(3)
root.left.left.right = new Node(7)
root.left.left.left.parent = root.left.left
root.left.left.right.parent = root.left.left

commonAncestor(root, root.left.left.right, root.left.right.right)
