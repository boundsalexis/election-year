
$(document).ready(function() {
    //make sure everything is loaded before we start
console.log("iload")
    /////////////// *********index***********/////////////////

    // $(document).on("submit", "#signIn", handleSignIn);

    // $(document).on("submit", "#senate-search", getSenators);


        $("#signIn").on("submit", function(event){
            console.log("i work!");
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
            console.log("iclick")
            var newUserData ={
                name: $("#username").val().trim(),
                location: $("#location").val().trim()
            }
            var newLoginData = {
                username: $("#email").val().trim(),
                password: $("#password").val().trim()
    
            }
        addNewUser(newUserData);
        addNewLogin(newLoginData);
        console.log("we made it to the end")
        })

        function addNewUser(newUserData) {
            
          $.post("/api/newuser", newUserData)
            .then(res => {
                console.log("wtf")
            })
            
        }
        function addNewLogin(newLoginData) {
        $.post("/api/newlogin", newLoginData)
                
        }
        //////
        // decide if we want forgot password functionality
        //////
    
    
    
    ///////////////****** Search pages*********////////////
    
       //
        // $("#createQuery").on("submit", function(event){
        //     event.preventDefault();
        //     var a = $("byParty").val();
        //     var b = $("byState").val();
        //     var c = $("byGender").val();
        //     var d = $("byname").val();
        //     console.log(a,b,c,d);
        //     // set up conditionals for if one field selected 2 if 3 
        // })
     
    })