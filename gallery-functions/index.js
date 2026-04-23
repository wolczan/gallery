const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const {logger} = require("firebase-functions");

setGlobalOptions({ maxInstances: 10 });

exports.helloWorld = onRequest((req, res) => {
  logger.info("Hello from gallery-functions");
  res.send("Hello from gallery-functions!");
});