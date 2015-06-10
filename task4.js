//var myButton = document.getElementById("changeColor");
//var square = document.getElementById("square1");
//	count++;
//switch(count) {
	  
  //  case 1:
      //  square.style.backgroundColor = "red";
       // myButton.value = "Make green";
       // break;

    //case 2:
       // square.style.backgroundColor = "green";
      //  myButton.value = "Make red";
      //  count = 0;
     //   break;
 //  }
  // });
(function () {
  var count=1;

  document.getElementById("button").addEventListener('click',function () {
    count++;

    if (count%2 === 0) {
        document.getElementById("square").style.backgroundColor="red";
        document.getElementById("button").innerHTML = "Make Green";
    }
    else {
        document.getElementById("square").style.backgroundColor="Green";
        document.getElementById("button").innerHTML = "Make Red";
    }
  });
})();
