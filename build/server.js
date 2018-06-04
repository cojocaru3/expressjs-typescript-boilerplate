"use strict";
/* app/server.ts */
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("./controllers/UserController");
// The port the express app will listen on
var port = process.env.PORT || 3000;
/**
 * Initialize Express App
 */
var app = routing_controllers_1.createExpressServer({
    controllers: [UserController_1.UserController] // we specify controllers we want to use
});
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
