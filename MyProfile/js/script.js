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

  var loader;
        function loadNow(opacity) {
            if(opacity <= 0) {
                displayContent();
            }
            else {
                loader.style.opacity = opacity;
                window.setTimeout(function() {
                    loadNow(opacity - 0.05)
                }, 100);
            }
        }
        
        function displayContent() {
            loader.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }
        
        document.addEventListener("DOMContentLoaded", function() {
            loader = document.getElementById('loader');
            loadNow(1);
        });

 
      
    