projects = {'nuvu-icon':'#nuvu-project', 'urbmet-icon':'#urbmet-project', 'rasclass-icon':'#rasclass-project'}

$(function() {
	
	// Hide Project container and children onload	
	$(".project-container").hide();

	// Hover and clickable effect of project thumbs
	$(".project-icon")
		.mouseover(function(){
			var src = $(this).children(".project-image").attr("src").match(/[^\.]+/) + "over.png";
			$(this).children(".project-image").attr("src", src);
			$(this).css('background-color', '#363636')
		})
        .mouseout(function() {
			var src = $(this).children(".project-image").attr("src").replace("over.png", ".png");
			$(this).children(".project-image").attr("src", src);
			$(this).css('background-color', '#4F4F4F')
        })
        .click(function(){       		
       		$(".project-container").children().hide();
       		console.log(projects[$(this).attr('id')]);
       		$(projects[$(this).attr('id')]).show();
       		$(".project-container").show(500);

       		//scrollToAnchor('div');
       		// not working       		
       		$('#projects')[0].scrollIntoView(500);

    	}
    );

    $("#close").click(function(){$(".project-container").hide(500);});
   
});













