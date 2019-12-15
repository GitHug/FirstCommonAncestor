class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const commonAncestor = (root, p, q) => {
  // check if either node is not in the tree of if one covers the other
  if (!covers(root, p) || !covers(root, q)) return null
  
  return ancestorHelper(root, p, q)
}

const ancestorHelper = (root, p, q) => {
  if (!root || root === p || root === q) {
    return root
  }

  const pIsOnLeft = covers(root.left, p)
  const qIsOnLeft = covers(root.left, q)

  if (pIsOnLeft !== qIsOnLeft) { // nodes are on different side
    return root
  }

  const childSide = pIsOnLeft ? root.left : root.right
  return ancestorHelper(childSide, p, q)
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

root.left.left = new Node(5)
root.left.right = new Node(15)

root.left.right.right = new Node(17)

root.left.left.left = new Node(3)
root.left.left.right = new Node(7)

commonAncestor(root, root.left.left.right, root.left.right.right)
