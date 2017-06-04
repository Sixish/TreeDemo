var compressor = require('node-minify');

compressor.minify({
    compressor: 'gcc',
    input: [
        './build/js/DuplicateKeyException.js',

        './build/js/Comparable.js',

        './build/js/BinaryTreeNode.js',
        './build/js/BinaryTree.js',

        './build/js/Demonstration.js',
        './build/js/TreeDemonstration.js'
    ],

    output: './release/scripts.js',
    compilation_level: 'SIMPLE_OPTIMIZATIONS'
});
