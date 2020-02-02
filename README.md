# Tin Foil Hat

Tin Foil Hat informs users about their congressional representatives and their campaign finance donation history.

## Site Pictures

1. Search Functionality

![Site](public/assets/img/app_demo.gif)


2. Profile Demo

![Site](public/assets/img/profile.gif)


3. Database population

![Site](public/assets/img/db.gif)

## Code Snippets

1. Populating the database

```javascript

        var options = {
            method: 'GET',
            headers: { 'X-API-Key': congressAPIKey },
            url: url
        };
        axios(options).then(function (response) {
            var members = response.data.results[0].members;

            for (let i = 0; i < members.length; i++) {
                db.Senator.create({
                    name: members[i].first_name + " " + members[i].last_name,
                    state: members[i].state,
                    fecId: members[i].fec_candidate_id,
                    memberId: members[i].id,
                    party: members[i].party,
                    gender: members[i].gender,
                    crpid: members[i].crp_id
                }).then(function (r) {
                    db.VotingRecord.create({
                        missed_pct: members[i].missed_votes_pct,
                        votesWParty_pct: members[i].votes_with_party_pct,
                        votesWOParty_pct: members[i].votes_against_party_pct,
                        SenatorId: r.dataValues.id
                    });
                });
            }
        });

    
```
* This block of code took care of populating both the Seantors and Voting Record tables in our database. We used axios to make the API request to Pro Publica API. The URL asked for all senators. This gave us back a list that we iterated through to create objects to send to our data models. We took advantage of the callback functions to go from the query response, to inserting a senator to our Senator table, and into creating a voting record for that specific senator. This avoided conflicts since each function was working on return data from the function before it.


2. User model

```javascript

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 3,
                    msg: "Name must be atleast 3 characters in length"
                }
            }
        },
        location: {
            type: DataTypes.STRING
        }
    });

    User.associate = models => {
        models.User.hasOne(models.Login, {
            onDelete: "cascade"
        })
    }
    return User;
}

```
* This is our definition for the user model. We had a simple model with a name and a location. Both of these fields had some validations that check the data before getting inserted into the table. Before the end of our model definition we inserted an association to the Login table. This one-to-one relationship will ensure that a login object can reference a unique User object.


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [MySQL](https://www.mysql.com/)
* [Handlebars](https://handlebarsjs.com/)
* [Charts.JS](https://www.chartjs.org/) 

## Authors

 * **Alexis Bounds**
    - [GitHub](https://github.com/boundsalexis) 
    - [LinkedIn](https://www.linkedin.com/in/boundsalexis/)

 * **Ian Toy**
    - [GitHub](https://github.com/ietoy)
    - [LinkedIn](https://www.linkedin.com/in/ian-toy-265077196/)

 * **Carlos Toledo**
    - [GitHub](https://github.com/kqarlos)
    - [LinkedIn](https://www.linkedin.com/in/carlos-toledo415/)

## Github Links

- [Link to site repository](https://github.com/boundsalexis/tinfoil-hat)
- [Alexis Bounds](https://github.com/boundsalexis)
- [Ian Toy](https://github.com/ietoy)
- [Carlos Toledo](https://www.github.com/kqarlos)


