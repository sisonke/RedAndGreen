var assert = {
	//i:0,
	//pass:0,

	 equals: function(massage,result)
	 {

		//this will check if the square is red or it's green.
		var mySquare = new RedOrGreen("mySquare");
		if(massage === result) {
			mySquare.makeGreen();
			
			}
		else {
			mySquare.makeRed();
			
		}
	
	}
}
var TestMyCode = { // this is an object literal and it has a method which is run
	run:function(name,assertTest){
		this.name=name;
		assertTest(assert);
	}
};
