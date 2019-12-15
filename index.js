class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }
}

const commonAncestor = (p, q) => {
  const delta = depth(p) - depth(q) // get difference in depths
  let [first, second] = delta > 0 ? [q, p] : [p, q] // get shallower node
  second = goUpBy(second, Math.abs(delta)) // get deeper node

  // find where paths intersect
  while(first !== second && first && second) {
    first = first.parent
    second = second.parent
  }

  return !first || !second ? null : first
}

const goUpBy = (node, delta) => {
  while(delta > 0 && node) {
    node = node.parent
    delta--
  }
  return node
}

const depth = node => {
  let depth = 0
  while (node) {
    node = node.parent
    depth++
  }
  return depth
}

const root = new Node(7)
root.left = new Node(5)
root.right = new Node(9)
root.left.parent = root
root.right.parent = root

root.left.left = new Node(3)
root.left.right = new Node(11)
root.left.left.parent = root.left
root.left.right.parent = root.left

commonAncestor(root, root.left.left, root.right)
