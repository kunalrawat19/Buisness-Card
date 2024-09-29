const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");
app.use(express.json());

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc:{
    type:String,
    required:true,
  },
  interest:[{
    type:String,
    required:true,
  }],
  socialMedia:[{
    type:String,
    required:true,
  }]
});

mongoose.connect("mongodb+srv://kunalrawat693:kunalrawat123@cluster0.xvcvbv3.mongodb.net/cardDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/sotreCard',async(req,res)=>{
  const {name,desc,interest,socialMedia} = req.body;
  const newSchema = new cardSchema({
    name,
    desc,
    interest,
    socialMedia
  })
  await newSchema.save();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})