
function compteur(){
	timer--;
	var minutes = parseInt(timer/60, 10);
	var secondes = (timer - minutes*60);

	$('#minutes').text(minutes);	
	$('#secondes').text(secondes);	
	if(timer==0){
		clearInterval(compte);
		}
}

var timer=30;
var compte =setInterval(compteur, 1000);

$('.stop').click(function(){
	clearInterval(compte);
});

$('.play').click(function(){
compte =setInterval(compteur, 1000);

});


$('.reset').click(function(){
timer=30;
//compte =setInterval(compteur, 1000);

});



// $(':button').click(function () {
//     if (this.id == 'stop') {
//         alert('Button stop was clicked');
//     }
//     else if (this.id == 'start') {
//         alert('Button start was clicked');
//     }
// });