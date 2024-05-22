const express = require('express');
const GroqAi = require('./sdk-groq');
const app = express();
const port = 3000;

app.get('/', async (req,res) => {
   if(req.query.content==null){
      res.send('404 Hanya Menampilkan Respon Groq :(')
   }else{
    const contents = req.query.content;
    const ai =  await GroqAi.getGroqChatCompletion(contents);
    const pesan = {
      data: ai.choices[0].message.content
    };
    res.send(JSON.stringify(pesan))
   }
})

app.listen(port, () => {
  console.log(`Running In PORT ${port}`)
})