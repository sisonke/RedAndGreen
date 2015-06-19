TestMyCode.run("testing hello_world function", function(assert){ // this function takes two parameters the string and the function(assert)
    var result = hello_world();
    // is the result as we expected?
    assert.equals("hello world!", result, "testing hello_world function");
});//if the massage is not the same as the return on the function the square should be red and the function should fail...
     //but if it passed then the square should have a green background meaning it failed the test......


