/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus2 = 0;

//loading popup with jQuery magic!
function loadPopup2(){
	//loads popup only if it is disabled
	if(popupStatus2==0){
		$("#backgroundPopup2").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup2").fadeIn("slow");
		$("#popupContact2").fadeIn("slow");
		popupStatus2 = 1;
	}
}

//disabling popup with jQuery magic!
function disablePopup2(){
	//disables popup only if it is enabled
	if(popupStatus2==1){
		$("#backgroundPopup2").fadeOut("slow");
		$("#popupContact2").fadeOut("slow");
		popupStatus2 = 0;
	}
}

//centering popup
function centerPopup2(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact2").height();
	var popupWidth = $("#popupContact2").width();
	//centering
	$("#popupContact2").css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2-14
	});
	//only need force for IE6
	
	$("#backgroundPopup2").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$("#button3").click(function(){
		//centering with css
		centerPopup2();
		//load popup
		loadPopup2();
	});
	$("#button4").click(function(){
		//centering with css
		centerPopup2();
		//load popup
		loadPopup2();
	});			
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose2").click(function(){
		disablePopup2();
	});
	//Click out event!
	$("#backgroundPopup2").click(function(){
		disablePopup2();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus2==1){
			disablePopup2();
		}
	});

});