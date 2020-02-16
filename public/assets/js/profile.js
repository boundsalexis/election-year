$(document).ready(function () {

    //Get id and state from DOM. 
    //If they are found a user just logged in and we need to save it to local storage and display their representatives
    var id = $("#info").data("id");
    var state = $("#info").data("location");
    if (state) {
        localStorage.setItem("User", JSON.stringify([id, state])); 
        displayUsersReps(id);
    }

    function displayUsersReps(userId) {
        $.ajax("/api/user/" + userId, {
            type: "GET"
        }).then(function (response) {

            // console.log(response);
            $.get("/api/senatorByState/" + state).then(function (data) {
                // console.log(data);
                newRow = $("<tr>");
                newRow.append("<th>Name</th>");
                // console.log(newRow)
                $("#senators").append(newRow);
                for (let i = 0; i < data.length; i++) {
                    dataRow = $("<tr class='member'>");
                    dataRow.append("<td class='name' id=" + data[i].fecId + ">" + data[i].name + "</td>");

                    $("#senators").append(dataRow);
                    // console.log(dataRow);

                }
            });
            $.get("/api/representativeByState/" + state).then(function (data) {
                // console.log(data);
                newRow = $("<tr>");
                newRow.append("<th>Name</th>");
                newRow.append("<th>District</>");
                $("#reps").append(newRow);
                for (let i = 0; i < data.length; i++) {
                    dataRow = $("<tr class='rep'>");
                    dataRow.append("<td class='name' id=" + data[i].fecId + ">" + data[i].name + "</td>");
                    dataRow.append("<td>" + data[i].district + "</td>");

                    $("#reps").append(dataRow);

                }
            });
        });
    };

    //Adds events listeners to representatives in profile page
    loadSenator = event => {
        let query = "/api/senatorprofile/" + event.target.id;
        window.location = query;
    }
    loadRep = event => {
        let query = "/api/representativeprofile/" + event.target.id;
        window.location = query;
    }
    $(document).on("click", ".member", loadSenator);
    $(document).on("click", ".rep", loadRep)

});

