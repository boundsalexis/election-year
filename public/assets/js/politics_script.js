$(document).ready(function() {
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



        ////////////// //*********************SIGN UP ******/ ////////////// 
        $("#newUser").on("click", function(event){
            event.preventDefault();
            ////////// client side validation to avoid mysterious server errors/////////
        


            var newUserData ={
                name: $("#username").val().trim(),
                location: $("#location").val().trim()
            }
            var newLoginData = {
                username: $("#email").val().trim(),
                password: $("#password").val().trim()
    
            }
            console.log(newLoginData, newUserData);
            addNewUser(newUserData);
            addNewLogin(newLoginData);

            console.log("made it through no error")
  
        })
      
        
        addNewUser = data=> {
            console.log(data);
            $.post("/api/newuser", data).then( res =>{
                let i =0;
                while(i<=res.errors.length-1){
                    alert(res.errors[i].message)
                    i+= 1;
                }
            })

        }
        addNewLogin =data =>{
            console.log(data);
            $.post("/api/newlogin", data).then( res =>{
                let i =0;
                while(i<=res.errors.length-1){
                    alert(res.errors[i].message)
                    i+= 1;
                }
            })

        }

        // }
        //////
        // decide if we want forgot password functionality
        //////
    
    
    
    ///////////////****** Search pages*********////////////
    //////////house
        $("#createQuery").on("click", function(event){
            event.preventDefault();
            // console.log(event);
            var query = {
                branch: $("#byBranch").val().trim(),
                party: $("#byParty").val().trim(),
                state: $("#byState").val().trim(),
                gender: $("#byGender").val().trim(),
                name: $("#byname").val().trim()
            };
            console.log(query);
            if(!query.branch && !query.party && !query.state && !query.gender && !query.name){
                console.log("this an empty query my friend")
            }
            else if (!query.branch){
                console.log("You must choose one branch to search.")
            } else {
                console.log("You are searching the " + query.branch + ".");
                // console.log("You are searching for all " + query.party + " in this branch.");
                // console.log("You are searching for all senators/representatives for the state of " + query.state + ".");
                // console.log("You are searching for all " + query.gender + " senators/representatives");
                // console.log("The name of the senator/representative that you are searching for is " + query.name + ".")

                $.get("/api/senator", function(data) {
                    console.log(data)
                })

            };
        })





    // end of doc ready listener, DONT TOUCH THIS
    })



