DIR_RELEASE=release
DIR_SRC=src
DIR_TS=$(DIR_SRC)/ts
DIR_LESS=$(DIR_SRC)/less

HTML=TreeDemonstration.html
JS=scripts.js
CSS=styles.css

OUTPUT_JS="release/scripts.js"
OUTPUT_CSS="release/styles.css"

# Typescript dependencies
TS_FILES=$(addprefix $(DIR_TS)/, BinaryTree.ts BinaryTreeNode.ts \
	DuplicateKeyException.ts Comparable.ts Demonstration.ts TreeDemonstration.ts)

ALL : .PHONY_SETUP release/TreeDemonstration.html $(OUTPUT_JS) $(OUTPUT_CSS)

.PHONY_SETUP : 
	mkdir -p $(DIR_RELEASE)

$(OUTPUT_JS) : $(TS_FILES)
	tsc
	#tsc --outFile $(OUTPUT_JS) $(TS_FILES)

release/TreeDemonstration.html : src/TreeDemonstration.html
	cp $(DIR_SRC)/TreeDemonstration.html release/TreeDemonstration.html

$(OUTPUT_CSS) : $(DIR_LESS)/main.less
	lessc $(DIR_LESS)/main.less release/styles.css

