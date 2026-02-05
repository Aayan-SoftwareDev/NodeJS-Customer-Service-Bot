const express = require("express");
const dotenv = require("dotenv");
const {email_webhook} = require("./controllers/emailWebhook.controller");

const app = express();

dotenv.config();

app.use(express.json());

// mailtrap will send POST req when email on the redirect email will be received
app.post("/webhook/email", email_webhook);

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
});
