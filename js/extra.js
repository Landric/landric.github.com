$( document ).ready(function() {

	$(".paper_collapse").each(function(index)
	{
		$(this).click(function(){
			$("#papers").slideUp();
			$("#paper_show").show();
		});
	});

	$("#paper_show").click(function(){
		$("#papers").slideDown();
		$(this).hide();
	});

});