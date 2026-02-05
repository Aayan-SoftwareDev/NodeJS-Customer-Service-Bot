const express = require("express");
const dotenv = require("dotenv");
const {email_webhook} = require("./controllers/emailWebhook.controller");

const app = express();

dotenv.config();

app.use(express.json());

app.post("/webhook/email", email_webhook);

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
});