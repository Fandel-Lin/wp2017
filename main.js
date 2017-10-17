var entered;
var container2_height;

$( document ).ready(function() {
    console.log( "ready!" );
	$("#PageRow1").css("left",parseInt($("body").css("width"))*(-1)+"px");
	$("#PageRow1").css("transition","0.7s");
	$("#PageRow1").css("display","inline");
	$("#PageRow2").css("left",parseInt($("body").css("width"))*(-1)+"px");
	$("#PageRow2").css("transition","0.7s");
	$("#PageRow2").css("display","inline");
	$("#PageRow3").css("left",parseInt($("body").css("width"))*(-1)+"px");
	$("#PageRow3").css("transition","0.7s");
	$("#PageRow3").css("display","inline");
	
	
	
	$( "#Skill" ).click(function() {
		//console.log( $("#PageContainer").css("height") );
		$("#PageRow").css("top",$("#PageContainer").css("height"));
		$("#PageFooter").css("top",$("#PageContainer").css("height"));
		$("#PageJumbotron").css("top",parseInt($("#PageContainer2").css("height"))*(-1)+"px");
		entered="#PageRow1";
		container2_height=parseInt($("#PageContainer2").css("height"));
		
		setTimeout(function(){ 
			$("#PageContainer2").css("height","50px");
			$("#PageRow1").css("left","0px");
			$("#Back").css("display","inline");
			$("#Back").css("left","0px");
		}, 700);
		
	});
	
	$( "#Motivation" ).click(function() {
		//console.log( $("#PageContainer").css("height") );
		$("#PageRow").css("top",$("#PageContainer").css("height"));
		$("#PageFooter").css("top",$("#PageContainer").css("height"));
		$("#PageJumbotron").css("top",parseInt($("#PageContainer2").css("height"))*(-1)+"px");
		entered="#PageRow2";
		container2_height=parseInt($("#PageContainer2").css("height"));
		
		setTimeout(function(){ 
			$("#PageContainer2").css("height","50px");
			$("#PageRow2").css("left","0px");
			$("#Back").css("display","inline");
			$("#Back").css("left","0px");
		}, 700);
		
	});
	
	$( "#Hobby" ).click(function() {
		//console.log( $("#PageContainer").css("height") );
		$("#PageRow").css("top",$("#PageContainer").css("height"));
		$("#PageFooter").css("top",$("#PageContainer").css("height"));
		$("#PageJumbotron").css("top",parseInt($("#PageContainer2").css("height"))*(-1)+"px");
		entered="#PageRow3";
		container2_height=parseInt($("#PageContainer2").css("height"));
		
		setTimeout(function(){ 
			$("#PageContainer2").css("height","50px");
			$("#PageRow3").css("left","0px");
			$("#Back").css("display","inline");
			$("#Back").css("left","0px");
		}, 700);
		
	});
	
	
	
	$( "#Back" ).click(function() {
		//console.log( $("#PageContainer").css("height") );
		$("#Back").css("left","-30px");
		$("#Back").css("display","none");
		$(entered).css("left",parseInt($("body").css("width"))*(-1)+"px");
		
		
		setTimeout(function(){ 
			$("#PageContainer2").css("height",container2_height);
			$("#PageJumbotron").css("top","0px");
			$("#PageFooter").css("top","0px");
			$("#PageRow").css("top","0px");
		}, 700);
		
	});

	
	
	
	
});