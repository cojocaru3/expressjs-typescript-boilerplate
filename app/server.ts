/* app/server.ts */

// Import everything from express and assign it to the express variable
import express = require('express');

// Import WelcomeController from controllers entry point
import {WelcomeController} from './controllers';
import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controllers/UserController";

// The port the express app will listen on
const port: any = process.env.PORT || 3000;

/**
 * Initialize Express App
 */
const app = createExpressServer({
   controllers: [UserController] // we specify controllers we want to use
});



// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
