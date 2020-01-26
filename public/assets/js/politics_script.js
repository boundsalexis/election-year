$(function(){
    // so everything is loaded before our js goes

    $("#newUser").on("submit", function(event){
        event.preventDefault();
        var newUserData ={
            name: $("#username").val().trim(),
            location: $("#location").val().trim()
        }
        var newLoginData = {
            username: $("#email").val().trim(),
            password: $("#password").val().trim()

        }

    // add post route here NEED ROUTE TO CONTINUE
    })

    $("#houseSearch").on("submit", function(event){
        event.preventDefault();
        
    })
})