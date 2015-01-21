jQuery(document).ready(function($) {
	// Validates if the email address is the correct format.
	function validEmail(email) {
	    var check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return check.test(email);
	}
	
	function validation() {
		// Looks for the value of the input field.
	    var email = $("#email").val();
	
	    if (validEmail(email)) {
		    // If true...
		    $("#email").val("Great, a valid email address.");
	        $("#email").css("background", "#8ec660");
	        $("#email").css("border-color", "#8ec660");
	        $("#email").css("color", "#ffffff");
	    } else {
		    // If false...
	        $("#email").val("Please enter a valid email address.");
	        $("#email").css("background", "#ff4141");
	        $("#email").css("border-color", "#ff4141");
	        $("#email").css("color", "#ffffff");
	        // return false; Remove this comment for the form to process successfuly.
	    }
	    return false; // Remove this line for the form to process successfully.
	}
	
	// This returns the input field back to its default colours.
	$("#email").click(function() {
	    $("#email").val("");
	    $("#email").css("background", "#ffffff");
	    $("#email").css("border-color", "#666666");
	    $("#email").css("color", "#000000");
	});
	
	$("form").bind("submit", validation);
});