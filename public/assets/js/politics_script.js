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
            
            // INSTANTIATE QUERY OBJECT HANDLING USER INPUT
            var query = {
                branch: $("#byBranch").val().trim(),
                party: $("#byParty").val().trim(),
                state: $("#byState").val().trim(),
                gender: $("#byGender").val().trim(),
                name: $("#byname").val().trim()
            };

            // INSTANTIATE GLOBAL VARIABLES FOR FUTURE USE
            var partyAbrv;
            var searchState;
            var genderAbrv;
            var searchName;

            // VALIDATIONS
            if(!query.branch && !query.party && !query.state && !query.gender && !query.name){
                console.log("this an empty query my friend")
            }
            else if (!query.branch){
                console.log("You must choose one branch to search.")
            } else {                
                switch(query.branch) {
                    case "Senate":

                        function handleUserInput() {
                            // ABBREVIATES PARTY NAME FOR QUERY
                            if (query.party === "Democrats") {
                                partyAbrv = "D";
                            } else if (query.party === "Republicans") {
                                partyAbrv = "R";
                            } else if (query.party === "Independents") {
                                partyAbrv = "ID"
                            } else if (!query.party) {
                                partyAbrv = "empty"
                            }
                            // IF STATE BLANK
                            if (!query.state) {
                                searchState = "empty";
                            } else {
                                searchState = query.state;
                            }
                            // ABBREVIATES GENDER FOR QUERY
                            if (query.gender === "Male") {
                                genderAbrv = "M";
                            } else if (query.gender === "Female") {
                                genderAbrv = "F";
                            } else if (!query.gender) {
                                genderAbrv = "empty";
                            }
                            // IF NAME BLANK
                            if (!query.name) {
                                searchName = "empty";
                            } else {
                                searchName = query.name;
                            }
                        }

                        handleUserInput();
                        
                        var queryString =   "/api/senator/" +
                                            partyAbrv + "/" +
                                            searchState + "/" +
                                            genderAbrv + "/"
                                            + searchName;
                        
                        $.get(queryString, function(data) {
                            console.log(data)
                        })
                        break;

                    case "House of Representatives":
                        // console.log("You're searching the House of Representatives!");
                            function handleUserInput() {
                            // ABBREVIATES PARTY NAME FOR QUERY
                            if (query.party === "Democrats") {
                                partyAbrv = "D";
                            } else if (query.party === "Republicans") {
                                partyAbrv = "R";
                            } else if (query.party === "Independents") {
                                partyAbrv = "ID"
                            } else if (!query.party) {
                                partyAbrv = "empty"
                            }
                            // IF STATE BLANK
                            if (!query.state) {
                                searchState = "empty";
                            } else {
                                searchState = query.state;
                            }
                            // ABBREVIATES GENDER FOR QUERY
                            if (query.gender === "Male") {
                                genderAbrv = "M";
                            } else if (query.gender === "Female") {
                                genderAbrv = "F";
                            } else if (!query.gender) {
                                genderAbrv = "empty";
                            }
                            // IF NAME BLANK
                            if (!query.name) {
                                searchName = "empty";
                            } else {
                                searchName = query.name;
                            }
                        }

                        handleUserInput();
                        
                        var queryString =   "/api/representative/" +
                                            partyAbrv + "/" +
                                            searchState + "/" +
                                            genderAbrv + "/"
                                            + searchName;
                        
                        $.get(queryString, function(data) {
                            console.log(data)
                        })

                }

            };

        })





    // end of doc ready listener, DONT TOUCH THIS
    })



