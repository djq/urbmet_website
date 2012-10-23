projects = {'nuvu-icon':'#nuvu-project', 'urbmet-icon':'#urbmet-project', 'rasclass-icon':'#rasclass-project'}

$(function() {
	
	// Hide Project container and children onload	
	$(".project-container").hide();

	// Hover and clickable effect of project thumbs
	$(".project-icon")
		.mouseover(function(){
			var src = $(this).children(".project-image").attr("src").match(/[^\.]+/) + "over.png";
			$(this).children(".project-image").attr("src", src);
			$(this).css('background-color', '#ddd')
		})
        .mouseout(function() {
			var src = $(this).children(".project-image").attr("src").replace("over.png", ".png");
			$(this).children(".project-image").attr("src", src);
			$(this).css('background-color', '')
        })
        .click(function(){       		
       		$(".project-container").children().hide();
       		$(projects[$(this).attr('id')]).show();								// Pull the right project
       		$(".project-container").show(500); 									// Open project container
		    $('#main').animate({scrollTop: $('#ourwork').offset().top + $('#main').scrollTop()}, 500);	// Scroll
		    $("#close").show();
		});

    $("#close").click(function(){
    	$(".project-container").hide(500);
	    $('#main').animate({scrollTop: 0}, 500);	// Scroll back to top
    });
});

