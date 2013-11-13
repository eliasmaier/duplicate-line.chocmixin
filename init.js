Hooks.addMenuItem("Text/Duplicate line", "ctrl-opt-d", function () {
	Recipe.run(function(doc) {
		// get hole line(s) around cursor / selection as range
		var selectedLineRange = doc.contentRangeOfLinesInRange(doc.selection);
		// get content in range
		var currentLineContent = doc.textInRange(selectedLineRange);
		// insert content on new line
		doc.insertTextAtLocation(selectedLineRange.max() + 1, currentLineContent + "\n");	
		// set cursor at begin of inserted line
		// TODO: set cursor at original cursor position on new line (do not change coloum index)
		doc.selection = new Range(selectedLineRange.max() + 1, 0);
	});
});
