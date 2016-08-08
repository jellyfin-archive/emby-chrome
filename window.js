jQuery(function($) {
	$(window).on("resize", resizeWindow);

    //Emby hosted web client
    var hosted_url = "http://app.emby.media";

    $("webview").attr("src",hosted_url).show();
    resizeWindow();

});

function resizeWindow() {
	$("#webview").height($(window).height()-15).width($(window).width()).attr("width",$(window).width()).attr("height",$(window).height());
}
