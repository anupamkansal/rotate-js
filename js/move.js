$(document).ready(function(){               

var elem=document.getElementById("spin-ball");
var dial=kcRotateDial(elem);
var mytextvalue = 0;

dial.onchange=function(){
	myroundvalue = Math.round(dial.deg);
	//console.log(myroundvalue);
	if(myroundvalue == 244){
		$("#myvalue"+mytextvalue).text(1);
	}
	else if(myroundvalue == 215){
		$("#myvalue"+mytextvalue).text(2);
	}
	else if(myroundvalue == 180){
		$("#myvalue"+mytextvalue).text(3);
	}
	else if(myroundvalue == 155){
		$("#myvalue"+mytextvalue).text(4);
	}
	else if(myroundvalue == 126){
		$("#myvalue"+mytextvalue).text(5);
	}
	else if(myroundvalue == 90){
		$("#myvalue"+mytextvalue).text(6);
	}
	else if(myroundvalue == 62){
		$("#myvalue"+mytextvalue).text(7);
	}
	else if(myroundvalue == 31){
		$("#myvalue"+mytextvalue).text(8);
	}
	else if(myroundvalue == 1){
		$("#myvalue"+mytextvalue).text(9);
	}
	else if(myroundvalue == 327){
		$("#myvalue"+mytextvalue).text(10);
	}
	else if(myroundvalue == 300){
		$("#myvalue"+mytextvalue).text(11);
	}
	else if(myroundvalue == 271){
		$("#myvalue"+mytextvalue).text(12);
	}
	else{
		$("#myvalue"+mytextvalue).text("");
	}
}


$("#myvalue1").click(function() {
	mytextvalue = 1;
});
$("#myvalue2").click(function() {
	mytextvalue = 2;
});
$("#myvalue3").click(function() {
	mytextvalue = 3;
});
$("#myvalue4").click(function() {
	mytextvalue = 4;
});


});