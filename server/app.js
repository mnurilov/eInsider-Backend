const express = require('express')
const app = express();


const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/hidden',(req,res) =>{
  res.send("Who do you think you are, what gives you the right?")
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});