const {findContext} = require("../utils/searchPineConeDB");
const {OpenAI} = require("openai");
const dotenv = require("dotenv");
const {
    TransactionalEmailsApi,
     TransactionalEmailsApiApiKeys,
      SendSmtpEmail
    } = require("@getbrevo/brevo");

dotenv.config();

const opneai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
const emailApiInstance = new TransactionalEmailsApi();
emailApiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

const email_webhook = async (req, res) => {
    const email = req.body;
    if(!email){
        console.log("no body");
        return res.json({message:"no body"}).status(400);
    }
    const customerEmail = email.envelope.from;
    const message = email.plain;

    const context = await findContext(message);

    const response = await opneai.chat.completions.create({
        model: "o4-mini",
        messages: [{
            role: "system",
            content: `You are a customer support agent. Your task is to provide a clear, respectful, and helpful response to the customer's question. You are given the question and relevant context that can help you answer it. 

- Use the context to answer accurately and fully.
- Dont make anything from yourself, use the context and valid info.
- The official link to order any book on website is: domain.store.
- The official number for human support is: phone_number.
- Don't give any invalid info to the user.
- Strictly Use Context.
- If their questions answer is not in the context give human support number: phone_number. 
- Write the response in **HTML format**, ready to be sent as an email.
- Be polite, professional, and supportive.
- Include a greeting and closing signature from the Company Robo Team.

CONTEXT: ${context}
QUESTION: ${message}
`,
        }]
    });

    const email_response_body = response.choices[0].message.content;
    const sendSmptEmail = new SendSmtpEmail();
    sendSmptEmail.subject = "Customer Service";
    sendSmptEmail.htmlContent = email_response_body;
    sendSmptEmail.sender = {name: "Customer Support", email: "support@domain.com"};
    sendSmptEmail.to = [{email: customerEmail}];
    try {
        await emailApiInstance.sendTransacEmail(sendSmptEmail);
        console.log("Email Response sent successfully!");
        res.status(200).json({message:"email sent"});
    } catch(e) {
        console.log(`An error occurred!`, e);
        res.status(500).json({message:"internal server error"});
    }
};

module.exports = {
    email_webhook,
};
