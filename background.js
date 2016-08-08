chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html', {
        //state: "fullscreen",
        'bounds': {
			'width': screen.width,
			'height': screen.height
		}
	});

});