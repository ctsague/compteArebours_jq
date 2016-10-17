//saisiMinutes = $("#input1").val();
var saisiSecondes = parseInt($("#input2").val(),10);
	
function compteur(){
	saisiSecondes--;
	var minutes = parseInt(saisiSecondes/60, 10);
	var secondes = (saisiSecondes % 60);
	$('#minutes').text(minutes);	
	$('#secondes').text(secondes);	
	if(saisiSecondes <= 0){
		clearInterval(compte);
		}
}

var compte =setInterval(compteur, 1000);

$('.start').on('click',function(){
	compte = setInterval(compteur, 1000);
	if (saisiSecondes <= 0 ){
	saisiSecondes=$("#input2").val();
	}
});

$('.stop').on('click',function(){
	clearInterval(compte);
});

$('.reset').on('click',function(){
	saisiSecondes=$("#input2").val();
	
});


