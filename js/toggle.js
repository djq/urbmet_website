projects = {'nuvu-icon':'#nuvu-project', 'urbmet-icon':'#urbmet-project', 'rasclass-icon':'#rasclass-project'}

$(function() {
	
	// Hide Project container and children onload	
	$(".project-container").hide().children().hide();

	// Hover and clickable effect of project thumbs
	$(".project-icon")
		.mouseover(function(){
			var src = $(this).children(".project-image").attr("src").match(/[^\.]+/) + "over.png";
			$(this).children(".project-image").attr("src", src);
			$(this).css('background-color', 'darkgray')
		})
        .mouseout(function() {
			var src = $(this).children(".project-image").attr("src").replace("over.png", ".png");
			$(this).children(".project-image").attr("src", src);
			$(this).css('background-color', 'gray')
        })
        .click(function(){       		
       		$(".project-container").children().hide();
       		console.log(projects[$(this).attr('id')]);
       		$(projects[$(this).attr('id')]).show();
       		$(".project-container").show(500);
    	}
    );
});

