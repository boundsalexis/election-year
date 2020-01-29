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
    };

    var ctx = document.getElementById('myChart').getContext('2d');

    var allIndustries = [];
    var industryTotals = [];

    function getIndustries(crpid) {
        return new Promise(function (resolve, reject) {
            if (!crpid) reject(crpid);
            // var OSAPIKey = "55bbf9d8ccd398720b6d6769ebe66440";
            var OSAPIKey = "9f5d48e148b27324806dd9c7d61410ce";
            var queryurl = "https://www.opensecrets.org/api/?method=candIndustry&cid=" + crpid + "&output=json&cycle=2020&apikey=" + OSAPIKey;
            $.get(queryurl).then(function (data) {
                var industries = JSON.parse(data).response.industries.industry;
                industries = industries.map(i => i['@attributes']);
                resolve(industries)
            });
        });
    }


   
    //check with AOC's id
    getIndustries("N00041162").then(function (industries) {
        // console.log(industries);
        industries.forEach(element => {
            console.log(element.industry_name + ": $" + element.total);
            allIndustries.push(element.industry_name);
            industryTotals.push(parseInt(element.total));

        });
        console.log(industryTotals);
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                // labels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
                labels: allIndustries,
                datasets: [{
                    label: 'Total Donated by Industry',
                    // data: [1000, 10, 1200, 12, 155, 149, 567, 42, 55, 1],
                    data: industryTotals,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(233, 212, 96, 0.2)',
                        'rgba(30, 130, 76, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(191, 191, 191, 0.2)',
                        'rgba(219, 10, 91, 0.2)',
                        'rgba(78, 205, 196, 0.2)',
                        'rgba(211, 84, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(233, 212, 96, 1)',
                        'rgba(30, 130, 76, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(191, 191, 191, 1)',
                        'rgba(219, 10, 91, 1)',
                        'rgba(78, 205, 196, 1)',
                        'rgba(211, 84, 0, 1)'
                    ],
                    borderWidth: 1
                }]
            },
        });
    });
});

