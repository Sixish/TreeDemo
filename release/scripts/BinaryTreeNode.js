"use strict";
var BinaryTreeNode = (function () {
    function BinaryTreeNode(key, value) {
        this.key = key;
        this.value = value;
    }
    BinaryTreeNode.prototype.getKey = function () {
        return this.key;
    };
    BinaryTreeNode.prototype.getValue = function () {
        return this.value;
    };
    BinaryTreeNode.prototype.getLeft = function () {
        return this.leftChild;
    };
    BinaryTreeNode.prototype.getRight = function () {
        return this.rightChild;
    };
    BinaryTreeNode.prototype.setLeft = function (child) {
        this.leftChild = child;
    };
    BinaryTreeNode.prototype.setRight = function (child) {
        this.rightChild = child;
    };
    return BinaryTreeNode;
}());
