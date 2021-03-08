// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(data) {
    this.data = data

    this.previous = null
    this.next = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.tail_link = null
    this.head_link = null
  }

  tail() {
    return this.tail_link.data
  }

  head() {
    return this.head_link.data
  }

  add(value) {
    const node = new Node(value)
    if (this.tail_link) {
      [this.tail_link.next, node.previous] = [node, this.tail_link]
      this.tail_link = node
    } else {
      this.tail_link = node
      this.head_link = node
    }
    return this
  }

  traverse(reverse = false) {
    const nodes = [...this.getNodes()]
    if (reverse) {
      nodes.reverse()
    }
    return nodes.map((node) => node.data).join(' -> ')
  }

  * getNodes() {
    let node = this.head_link
    while (node) {
      yield node
      node = node.next
    }
  }

  getNode(value) {
    // eslint-disable-next-line no-restricted-syntax
    for (const node of this.getNodes()) {
      if (value === node.data) {
        return node
      }
    }
    return null
  }

  delete(value) {
    const node = this.getNode(value)
    if (node) {
      const previousNode = node.previous
      const nextNode = node.next
      if (previousNode) {
        previousNode.next = nextNode
      } else {
        this.head_link = nextNode()
      }
      if (nextNode) {
        nextNode.previous = previousNode
      } else {
        this.tail_link = previousNode
      }
    }
    node.next = null
    node.previous = null
    return this
  }

  isExist(value) {
    return Boolean(this.getNode(value))
  }

  addAfter(value, parentNode) {
    const node = new Node(value)
    const nextNode = parentNode.next
    // eslint-disable-next-line no-param-reassign
    parentNode.next = node
    if (nextNode) {
      nextNode.previous = node
    } else {
      this.tail_link = node
    }
    node.previous = parentNode
    node.next = nextNode
    return this
  }
}

function main() {
  const dll = new DoubleLinkedList()
  dll.add('two').add('one').add('three').add('four')
  console.log(dll.traverse()) // two -> one -> three -> four
  console.log(dll.traverse(true)) // four -> three -> one -> two
  console.log(dll.traverse(false)) // two -> one -> three -> four

  console.log(dll.head())
  console.log(dll.tail())

  const parentNode = dll.getNode('one')
  dll.addAfter('ten', parentNode)
  console.log(dll.traverse()) // two -> one -> ten -> three -> four

  dll.delete('one').delete('three')
  console.log(dll.traverse()) // two -> ten -> four

  console.log(dll.isExist('ten')) // true
  console.log(dll.isExist('one')) // false
  dll.delete('four')
  const ten = dll.getNode('ten')
  dll.addAfter('eleven', ten)
  console.log(dll.traverse())
}

main()
