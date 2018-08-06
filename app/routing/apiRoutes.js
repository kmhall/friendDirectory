
var users = require("../data/users");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/users", function(req, res) {
      res.json(users);
    });

    app.post("/api/users", function(req, res) {
      userLength = users.length;
      var userName = req.body;

      //Add a unique id to the user
      userName.id = userLength+1;
      users.push(userName)
    });

    //Used to Update a user's info
    app.post("/api/update", function(req, res) {
      var myInfo = req.body;
      for(var i=0;i<users.length;i++){
        if(myInfo.id == users[i].id){
          users[i].firstName = myInfo.firstName;
          users[i].lastName = myInfo.lastName;
          users[i].hometown = myInfo.hometown;
          users[i].school = myInfo.school;
          users[i].birthday = myInfo.birthday;

        }
        
      }
    });
  }


  
