$(document).ready(function () {

    var id = window.location.href;
    console.log(id.charAt(id.length - 1));
    id = id.charAt(id.length - 1);
    displayUsersReps(id);
    function displayUsersReps(userId) {
        $.ajax("/api/user/" + userId, {
            type: "GET"
        }).then(function (response) {
            console.log(response);
            let state = response.location;
            state = "CA";
            $.get("/api/senatorByState/" + state).then(function (senator) {
                // console.log(senator);
                for (let i = 0; i < senator.length; i++) {
                    var li = $("<li>");
                    li.text(JSON.stringify(senator[i]));
                    $("#senators").append(li);
                }
            });
            $.get("/api/representativeByState/" + state).then(function (representatives) {
                // console.log(representatives);
                for (let i = 0; i < representatives.length; i++) {
                    var li = $("<li>");
                    li.text(JSON.stringify(representatives[i]));
                    $("#reps").append(li);
                }
            });
        });
    }

    function getIndustries(crpid) {
        return new Promise(function (resolve, reject) {
            if (!crpid) reject(crpid);
            // var OSAPIKey = "55bbf9d8ccd398720b6d6769ebe66440";
            var OSAPIKey = "9f5d48e148b27324806dd9c7d61410ce";

            var queryurl = "https://www.opensecrets.org/api/?method=candIndustry&cid=" + crpid + "&output=json&cycle=2020&apikey=" + OSAPIKey;
            $.get(queryurl).then(function (data) {
                // console.log(data);
                var industries = JSON.parse(data).response.industries.industry;
                // console.log(industries);
                industries = industries.map(i => i['@attributes']);
                // console.log(industries);
                // industries = industries.map(i => JSON.stringify(i));
                // console.log(industries);
                resolve(industries)
            });
        });
    }

    //check with AOC's id
    getIndustries("N00041162").then(function (industries) {
        console.log(industries);
    });


});