$(document).ready(function () {

    $("#profile").on("click", displayUsersReps(2));

    //
    function displayUsersReps(userId) {
        $.ajax("/api/user/" + userId, {
            type: "GET"
        }).then(function (response) {
            console.log(response);
            let state = response.location;
            state = "CA";
            $.get("/api/senatorByState/" + state).then(function (senator) {
                console.log(senator);
                for (let i = 0; i < senator.length; i++) {
                    var li = $("<li>");
                    li.text(JSON.stringify(senator[i]));
                    $("#senators").append(li);
                }
            });
            $.get("/api/representativeByState/" + state).then(function (representatives) {
                console.log(representatives);
                for (let i = 0; i < representatives.length; i++) {
                    var li = $("<li>");
                    li.text(JSON.stringify(representatives[i]));
                    $("#reps").append(li);
                }
            });
        });
    }

});