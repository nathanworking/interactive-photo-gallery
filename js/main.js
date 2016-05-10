//----------------------------------------------------------------//
//------------// Showing Captions on Lightbox View //------------//
//----------------------------------------------------------------//
$(document).ready(function(){
	var $caption = $("<p></p>");
	//Get child's title attribute and set caption
	var captionText = $('a figcaption');
	$caption.text(captionText);

	//A caption to overlay
	$('div .featherlight-content').append($caption);
});

//----------------------------------------------------------------//
//---------------// Calling Hideseek Live Search //---------------//
//----------------------------------------------------------------//
$(document).ready(function() {
    $('#search').hideseek();
});
