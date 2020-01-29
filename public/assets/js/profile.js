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
                    // var li = $("<li>");
                    // li.text(JSON.stringify(representatives[i]));
                    // $("#reps").append(li);
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
                industries = industries.map(i => JSON.stringify(i));
                // console.log(industries);
                resolve(industries)
            });
        });
    }




    var allIndustries = [];
    var industryTotals = [];

    //check with AOC's id
    getIndustries("N00041162").then(function (industries) {
        // console.log(industries);
        industries.forEach(element => {
            console.log(element.industry_name + ": $" + element.total);
            var industry_name = element.industry_name;
            var industry_total = element.total;
            allIndustries.push(industry_name);
            industryTotals.push(parseInt(industry_total))
        });
        console.log(allIndustries);
        console.log(industryTotals);
    });


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
        // labels: allIndustries,
        datasets: [{
            label: 'Total Donated by Industry',
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            // data: industryTotals,
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

