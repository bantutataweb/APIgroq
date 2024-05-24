const Groq = require('groq-sdk');
const groq = new Groq({
    apiKey : 'YOUR_API'
});

async function main() {
    const chatCompletion = await getGroqChatCompletion();
    process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
}
async function getGroqChatCompletion(conntent) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: conntent,
            },
        ],
        model: "llama3-8b-8192"
    });
}
module.exports = {
    main,
    getGroqChatCompletion
};

