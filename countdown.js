function compteur(){
	timer--;
	
	var minutes = parseInt(timer/60, 10);
	var secondes = (timer - minutes*60);

	 $('#minutes').text(minutes);	
	 $('#secondes').text(secondes);	
	 console.log(minutes);
	 console.log(secondes);

}

var timer=100;
var compte =setInterval(compteur, 1000);




$('.reset').on('click',function(){
	clearInterval(compte);
});

