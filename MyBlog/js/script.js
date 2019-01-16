$(document).ready(function() {
	$(".fa-bars").click(function(){
		$(".sidebar-menu").addClass("hide-menu");
		$(".toggle-menu").addClass("opacity-zero");
	});
	$(".fa-times").click(function(){
		$(".sidebar-menu").removeClass("hide-menu");
		$(".toggle-menu").removeClass("opacity-zero");
	});
});