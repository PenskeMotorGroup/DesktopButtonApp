chrome.app.runtime.onLaunched.addListener(function() {
	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width = 150;
	var height = 40;
	chrome.app.window.create('index.html', {
		// Define an ID for the window
		id: "buttonWindowId",
		// Always on top of other windows
		alwaysOnTop: true,
		// Prevent resizing
		resizable: false,
		outerBounds: {
			// Window dimensions
			width: width,
			height: height,
			// Window position
			left: Math.round((screenWidth-width)/2),
			top: Math.round((screenHeight-height)/2)
		},
		frame: {
			// Hide frame
			type: "none"
		}
	});
});
