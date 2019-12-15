class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const commonAncestor = (root, p, q) => {
  if (!root) return null
  if (root === p && root === q) return root

  const x = commonAncestor(root.left, p, q)
  if (x && x !== p && x !== q) {
    return x
  }

  const y = commonAncestor(root.right, p, q)
  if (y && y !== p && y !== q) {
    return y
  }

  if (x && y) { // p and q found in different subtrees
    return root
  } else if (root === p || root === q) {
    return root
  } else {
    return x ? x : y
  }
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
