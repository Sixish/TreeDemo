class BinaryTree<K extends Comparable<K>, V> {

    /* Root node of the BinaryTree. */
    private root : BinaryTreeNode<K, V>;

    private length : number;

    public constructor() {
        /* Nothing to do here. No need to set root to undefined. */
    }

    private findParentNext(node : BinaryTreeNode<K, V>, key : K) :
            BinaryTreeNode<K, V> {
        let nextNode : BinaryTreeNode<K, V>;

        if (node.getKey().compareTo(key) > 0) {
            nextNode = node.getLeft();
        }
        else {
            nextNode = node.getRight();
        }

        return nextNode;
    }

    private findParent(key : K) : BinaryTreeNode<K, V> {
        let node : BinaryTreeNode<K, V> = this.root;

        while (node != null)
        {
            node = this.findParentNext(node, key);
        }

        return node;
    }

    public insert(key : K, value : V) : void {
        let parent : BinaryTreeNode<K, V> = this.findParent(key);
        let node : BinaryTreeNode<K, V> = new BinaryTreeNode<K, V>(key, value);

        /* findParent(K) will return the node containing the key if it exists.
         * If it exists, refuse the insertion. */
        if (parent.getKey() === key) {
            throw new DuplicateKeyException("Cannot insert duplicate key " + key +
                " into binary tree.");
        }

        if (parent.getKey() < key) {
            parent.setLeft(node);
        }
        else {
            parent.setRight(node);
        }
    }
}
