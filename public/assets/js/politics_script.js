$(document).ready(function () {
    //make sure everything is loaded before we start

    /////////////// *********index***********/////////////////
    $("#signIn").on("submit", function (event) {
        event.preventDefault();
        var signIn = {
            email: $("#signInEmail").val().trim(),
            password: $("#signInPassword").val().trim()
        }
        login(signIn);
    })
    login = data => {
        
        $.get("/api/login/" + data.email + "/" + data.password, function (res) {
            console.log(res);
            window.location = "/api/user/" + res;
        })
    }
    ////////////// //*********************SIGN UP ******/ ////////////// 
    $("#newUser").on("click", function (event) {
        event.preventDefault();
        //client side verification is missing
        var newCredential = {
            name: $("#username").val().trim(),
            location: $("#location").val().trim(),
            email: $("#email").val().trim(),
            password: $("#password").val().trim()
        }
        addCredential(newCredential);
    })


    addCredential = (data) => {

        $.post("/api/addcredential", data).then(res => {
            console.log(res);
        })
    }
//lost password not functional
    // end of doc ready listener, DONT TOUCH THIS
})



