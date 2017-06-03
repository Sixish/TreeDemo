/* TreeDemonstration.ts
 *
 * Handles Tree demonstrations.
 */
class TreeDemonstration<K extends Comparable<K>, V> extends Demonstration {

    /* The tree data structure. */
    tree : BinaryTree<K, V>;

    constructor(tree : BinaryTree<K, V>) {
        super();
        this.tree = tree;
    }

}
