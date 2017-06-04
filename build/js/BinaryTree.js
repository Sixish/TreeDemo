"use strict";
var BinaryTree = (function () {
    function BinaryTree() {
    }
    BinaryTree.prototype.findParentNext = function (node, key) {
        var nextNode;
        if (node.getKey().compareTo(key) > 0) {
            nextNode = node.getLeft();
        }
        else {
            nextNode = node.getRight();
        }
        return nextNode;
    };
    BinaryTree.prototype.findParent = function (key) {
        var node = this.root;
        while (node != null) {
            node = this.findParentNext(node, key);
        }
        return node;
    };
    BinaryTree.prototype.insert = function (key, value) {
        var parent = this.findParent(key);
        var node = new BinaryTreeNode(key, value);
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
    };
    return BinaryTree;
}());
