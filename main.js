/*

Complete and submit the following three exercises to go over JavaScript event binding:

1. Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"

$('.selector').html('copy'); - Update the DOM using jQuery

2. Create a larger element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"
https://api.jquery.com/mouseenter/ (Links to an external site.) (this is the preferred way. See .mouseenter & .mouseleave near the bottom.
https://api.jquery.com/hover/ (Links to an external site.) (hover helper function)

3. Create and trigger a custom (not `click`, `mouseover`, etc.) event in an implementation of your choice.

Implement these using jQuery.


*/

$(document).on('ready', function(){
	$('#buttonblue').on('click', function(){
		$('#buttonblue').html("<h3>I'm right!</h3>");
	});
	$('#buttonred').on('click', function(){
		$('#buttonred').html("<h3>No, I'm right!</h3>");
	});
});

$('.hoverbox').on('mouseenter', function() {
	alert('Told you not to hover over me!');
});


$('#foo').on('customEvent', function() {
	alert('The custom event just happened');
});

$('#foo').trigger('customEvent');