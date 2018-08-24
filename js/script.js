$(document).ready(() => {
	accordion();
});
let accordion = () => {
	$(".accordion-button").click(function(e){
		e.preventDefault();
		$(this).toggleClass(".active");
		$(this).next(".content").slideToggle(500);
	});
}	