var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tree = (function () {
    function Tree() {
    }
    return Tree;
}());
var Demonstration = (function () {
    function Demonstration() {
    }
    return Demonstration;
}());
/* TreeDemo.ts
 *
 * Handles Tree demonstrations.
 */
var TreeDemonstration = (function (_super) {
    __extends(TreeDemonstration, _super);
    function TreeDemonstration(tree) {
        var _this = 
        /* Stuff */
        _super.call(this) || this;
        _this.tree = tree;
        return _this;
    }
    return TreeDemonstration;
}(Demonstration));
