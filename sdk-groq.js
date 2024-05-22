const Groq = require('groq-sdk');
const groq = new Groq({
    apiKey : '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'
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

