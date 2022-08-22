const functions = require("firebase-functions");
const dripClient = require('drip-api')({
  apiKey:  process.env.DRIP_APIS_KEY,
  accountId: process.env.DRIP_ACCOUNT_ID
})

// Listens for new user added to /trigger
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  // ...drip apis integration
  const payload = {
    email: user.email,
    time_zone: "America/Los_Angeles",
    custom_fields: {
      shirt_size: "Medium"
    }
  };
  
  dripClient.createUpdateSubscriber(payload)
    .then((response) => {
      // Handle `response.body`
    })
    .catch((error) => {
      // Handle errors
    });
});
