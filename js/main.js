var $caption = $("<p></p>");


$(document).ready(function(){
	$('.gallery').featherlightGallery();

  //Get child's title attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//----------------------------------------------------------------//
//---------------// Calling Hideseek Live Search //---------------//
//----------------------------------------------------------------//
$(document).ready(function() {
    $('#search').hideseek();
});
