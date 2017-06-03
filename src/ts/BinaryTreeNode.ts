class BinaryTreeNode<K, V> {

    /* Key for the node. */
    private key : K;

    /* Value stored in the node. */
    private value : V;

    /* Left child of this node. */
    private leftChild : BinaryTreeNode<K, V>;

    /* Right child of this node. */
    private rightChild : BinaryTreeNode<K, V>;

    /*
     * Constructor for BinaryTreeNodes.
     */
    public constructor(key : K, value : V) {
        this.key = key;
        this.value = value;
    }

    /*
     * Gets the key of the node.
     */
    public getKey() : K {
        return this.key;
    }

    /*
     * Gets the value stored in the node.
     */
    public getValue() : V {
        return this.value;
    }

    /*
     * Gets the left child of this node.
     */
    public getLeft() : BinaryTreeNode<K, V> {
        return this.leftChild;
    }

    /*
     * Gets the right child of this node.
     */
    public getRight() : BinaryTreeNode<K, V> {
        return this.rightChild;
    }

    /*
     * Sets the left child of this node.
     */
    public setLeft(child : BinaryTreeNode<K, V>) {
        this.leftChild = child;
    }

    /*
     * Sets the right child of this node.
     */
    public setRight(child : BinaryTreeNode<K, V>) {
        this.rightChild = child;
    }

}
