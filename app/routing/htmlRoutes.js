// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/chooseUser", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/chooseUser.html"));
  });

  app.get("/newUser", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/newUser.html"));
  });

  app.get("/personalPage", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/personalPage.html"));
  });

  app.get("/changeInfo", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/changeInfo.html"));
  });

  // If no matching route is found default to 404 page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/login.html"));
  });

  

};