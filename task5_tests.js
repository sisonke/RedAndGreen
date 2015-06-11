(function  () {
if(document.getElementById('mySquare').style.backgroundColor === 'red') {
          window.alert('success');
}
else {
	window.alert('failure');
 }


setBackgroundColor('mySquare', 'orange');
	if(document.getElementById('mySquare').style.backgroundColor === 'orange') {
		window.alert('success');
	}
	else {
		window.alert('failure');
}
})();
