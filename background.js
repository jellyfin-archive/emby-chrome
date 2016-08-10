chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        state: "fullscreen",
        'bounds': {
            'width': screen.width,
            'height': screen.height
        }
    });

});

document.addEventListener('webkitfullscreenchange', function(){
    if (chrome.app.window.current().isFullscreen()){
        webview.style.height = screen.height + 'px';
        webview.style.width = screen.width + 'px';
    }
    else{
        //
    }
});
