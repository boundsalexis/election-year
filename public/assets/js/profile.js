$(document).ready(function () {

    var id = $("#info").data("id");
    var state = $("#info").data("location");
    localStorage.setItem("User", JSON.stringify([id, state]));
    // console.log(JSON.parse(localStorage.getItem("User")));
    
    displayUsersReps(id);
    function displayUsersReps(userId) {
        $.ajax("/api/user/" + userId, {
            type: "GET"
        }).then(function (response) {

            console.log(response);
            let state = response.location;
            state = "CA";
            $.get("/api/senatorByState/" + state).then(function (data) {
                console.log(data);
                newRow=$("<tr>");
                newRow.append("<th>Name</th>");
                console.log(newRow)
                $("#senators").append(newRow);
                for (let i = 0; i < data.length; i++) {
                    dataRow =$("<tr>");
                    dataRow.append("<td>"+data[i].name+"</td>");
            
                    $("#senators").append(dataRow);
                    console.log(dataRow);

                }
            });
            $.get("/api/representativeByState/" + state).then(function (data) {
                console.log(data);
                newRow=$("<tr>");
                newRow.append("<th>Name</th>");
                newRow.append("<th>District</>");
                $("#reps").append(newRow);
                for (let i = 0; i < data.length; i++) {
                    dataRow =$("<tr>");
                    dataRow.append("<td>"+data[i].name+"</td>");
                    dataRow.append("<td>"+data[i].district+"</td>");

                    $("#reps").append(dataRow);

                }
            });
        });
    };

});

