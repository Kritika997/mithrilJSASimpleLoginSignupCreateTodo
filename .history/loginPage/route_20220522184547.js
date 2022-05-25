var m = require("mithril")

m.route(document.body, "/home", {
    "/home": Home, // defines `https://localhost/#!/home`
})