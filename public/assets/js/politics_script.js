$(function(){
//make sure everything is loaded before we start

/////////////// *********index***********/////////////////
    $("#signIn").on("submit", function(event){
        event.preventDefault();
        var signIn={
            email: $("#signInEmail").val().trim(),
            password: $("#signInPassword").val().trim()
        }
        console.log(signIn);
    //add post route to check login against our db 
    //add get route to route to profile page populated with
    //saved table and comments?   
    })
    $("#newUser").on("click", function(event){
        event.preventDefault();
        var newUserData ={
            name: $("#username").val().trim(),
            location: $("#location").val().trim()
        }
        var newLoginData = {
            username: $("#email").val().trim(),
            password: $("#password").val().trim()

        }
        console.log($("#location").val().trim())
        console.log(newUserData);
    //add post route to add this to  db
    // add get route to route to profile page?
    })


    //////
    // decide if we want forgot password functionality
    //////



///////////////****** Search pages*********////////////
//////////house
    $("#createQuery").on("click", function(event){
        event.preventDefault();
        var query = {
            branch: $("#byBranch").val().trim(),
            party: $("#byParty").val().trim(),
            state: $("#byState").val().trim(),
            gender: $("#byGender").val().trim(),
            name: $("#byname").val().trim()
        };
        
    })
    
 
})