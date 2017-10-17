var entered;
var detail_pic;
var container2_height;

$( document ).ready(function() {
    console.log( "ready!" );
	$("#PageRow1").css("left",parseInt($("body").css("width"))*(-1)+"px");
	$("#PageRow1").css("transition","0.7s");
	$("#PageRow1").css("display","flex");
	//$("#PageRow1").removeClass("display");
	$("#PageRow2").css("left",parseInt($("body").css("width"))*(-1)+"px");
	$("#PageRow2").css("transition","0.7s");
	$("#PageRow2").css("display","flex");
	//$("#PageRow2").removeClass("display");
	$("#PageRow3").css("left",parseInt($("body").css("width"))*(-1)+"px");
	$("#PageRow3").css("transition","0.7s");
	$("#PageRow3").css("display","flex");
	//$("#PageRow3").removeClass("display");
	
	$("#Skill_detail_pic").css("right",parseInt($("body").css("width"))*(-2)+"px");
	$("#Skill_detail_pic").css("transition","0.9s");
	$("#Skill_detail_pic").css("display","flex");
	//$("#Skill_detail_pic").removeClass("display");
	
	$("#Motivation_detail_pic").css("right",parseInt($("body").css("width"))*(-2)+"px");
	$("#Motivation_detail_pic").css("transition","0.9s");
	$("#Motivation_detail_pic").css("display","flex");
	
	$("#Hobby_detail_pic").css("right",parseInt($("body").css("width"))*(-2)+"px");
	$("#Hobby_detail_pic").css("transition","0.9s");
	$("#Hobby_detail_pic").css("display","flex");
	
	
	
	$( "#Skill" ).click(function() {
		//console.log( $("#PageContainer").css("height") );
		$("#PageRow").css("top",$("#PageContainer").css("height"));
		$("#PageFooter").css("top",$("#PageContainer").css("height"));
		$("#PageJumbotron").css("top",parseInt($("#PageContainer2").css("height"))*(-1)+"px");
		entered="#PageRow1";
		detail_pic="#Skill_detail_pic";
		container2_height=parseInt($("#PageContainer2").css("height"));
		
		setTimeout(function(){ 
			$("#PageContainer2").css("height","50px");
			$("#PageRow1").css("left","0px");
			$("#Back").css("display","inline");
			//$("#Back").removeClass("display");
			$("#Back").css("left","0px");
			$("#PageRow").css("display","none");
			
			setTimeout(function(){ 
				$("#Skill_detail_pic").css("right","0px");
				$("#gis").css("display","flex");
				//$("#gis").removeClass("display");
				$("#gis").css("right","0px");
			}, 200);
		}, 700);
		
		
		
	});
	
	$( "#Motivation" ).click(function() {
		//console.log( $("#PageContainer").css("height") );
		$("#PageRow").css("top",$("#PageContainer").css("height"));
		$("#PageFooter").css("top",$("#PageContainer").css("height"));
		$("#PageJumbotron").css("top",parseInt($("#PageContainer2").css("height"))*(-1)+"px");
		entered="#PageRow2";
		detail_pic="#Motivation_detail_pic";
		container2_height=parseInt($("#PageContainer2").css("height"));
		
		setTimeout(function(){ 
			$("#PageContainer2").css("height","50px");
			$("#PageRow2").css("left","0px");
			$("#Back").css("display","inline");
			//$("#Back").removeClass("display");
			$("#Back").css("left","0px");
			$("#PageRow").css("display","none");
			
			setTimeout(function(){ 
				$("#Motivation_detail_pic").css("right","0px");
				$("#html").css("display","flex");
				//$("#html").removeClass("display");
				$("#html").css("right","0px");
			}, 200);
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
			//$("#Back").removeClass("display");
			$("#Back").css("left","0px");
			$("#PageRow").css("display","none");
			
			setTimeout(function(){ 
				$("#Hobby_detail_pic").css("right","0px");
				$("#pichu").css("display","flex");
				//$("#pichu").removeClass("display");
				$("#pichu").css("right","0px");
			}, 200);
		}, 700);
		
	});
	
	
	
	$( "#Back" ).click(function() {
		//console.log( $("#PageContainer").css("height") );
		$("#Back").css("left","-30px");
		$("#Back").css("display","none");
		$(entered).css("left",parseInt($("body").css("width"))*(-1)+"px");
		
		setTimeout(function(){ 
			$("#PageRow").css("display","flex");
		}, 600);
		
		
		setTimeout(function(){ 
			$("#PageContainer2").css("height",container2_height);
			$("#PageJumbotron").css("top","0px");
			
			$("#PageRow").css("top","0px");
			//$("#Skill_detail_pic").css("transition","0s");
			
			setTimeout(function(){ 
				$(detail_pic).css("display","none");
				$(detail_pic).css("right",parseInt($("body").css("width"))*(-2)+"px");
				
				setTimeout(function(){
					$(detail_pic).css("display","flex");
					$("#PageFooter").css("top","0px");
				}, 100);
				
			}, 200);
		}, 700);
		
	});

	
	
	
	
});