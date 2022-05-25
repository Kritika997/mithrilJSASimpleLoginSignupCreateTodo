var m = require("")

m.route(document.body, "/home", {
    "/home": Home, // defines `https://localhost/#!/home`
})