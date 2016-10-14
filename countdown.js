
function compteur(){
	count--;
	//console.log(count);
	 $('.count').text(count);		
}

var count=100;
var compte =setInterval(compteur, 1000);

$('.reset').on('click',function(){
	clearInterval(compte);
});