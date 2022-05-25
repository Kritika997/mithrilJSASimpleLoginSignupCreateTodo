var m = require("mithril");
var signup = require("./signup")

m.route(document.body, "/signup", {
    "/signup": Signup, // defines `https://localhost/#!/home`
})