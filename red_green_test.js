   var rg = new RedOrGreen("mySquare");

   rg.makeGreen();
   // myElements backgound color should be green now
   if(document.getElementById("mySquare").style.backgroundColor === "green") {
   		window.alert("success");
   }
   else {
   		window.alert("failure");
   }
    
   rg.makeRed();
   // myElements backgound should be red now
   if(document.getElementById("mySquare").style.backgroundColor === "red") {
   		window.alert("success");
   }
   else {
   		window.alert("failure");
   	}