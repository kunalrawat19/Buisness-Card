const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const { createCardSchema } =require('./type.js');
app.use(express.json());
const cors = require('cors');
// const corsOptions = {
//   origin: ['https://buisness-card-frontend.vercel.app/'], // Your frontend URL
//   methods: ['POST', 'GET', 'DELETE'],
//   credentials: true
// };
// app.use(cors(corsOptions));
app.use(cors());
const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  interest: [{
    type: String,
    required: true,
  }
],
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  }
});

// Model creation
const Card = mongoose.model('Card', cardSchema);
//comment added 

mongoose.connect("mongodb://localhost:27017/BuisnessCardDatabase")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


// POST route to store a card
app.post('/cards', async (req, res) => {
  // Validate the request body against the schema
  const validationResult = createCardSchema.safeParse(req.body);
  console.log(validationResult);
  
  if (!validationResult.success) {
      // If validation fails, respond with errors
      return res.status(400).send({
          message: validationResult.error,
          
          errors: validationResult.error.errors
      });
  }

  // Destructure the validated data
  const { name, desc, interest, linkedin, twitter } = validationResult.data;

  try {
      const newCard = new Card({
          name,
          desc,
          interest,
          linkedin,
          twitter
      });

      await newCard.save();
      
      res.status(201).send({
          message: 'Card stored successfully!',
          card: newCard
      });
  } catch (error) {
      res.status(500).send({
          message: 'Error storing card',
          error: error.message
      });
  }
});

app.get('/card', async(req, res) => {
  try {
    const cards = await Card.find(); // Fetch all cards from the database
    res.status(200).send({
        message: 'Cards retrieved successfully!',
        cards, // Send the retrieved cards in the response
    });
} catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({
        message: 'Error retrieving cards',
        error: error.message,
    });
}
});
app.get('/',(req,res)=>{
  res.send({
    message:"backend running succesfully"
  })
})
app.delete('/cards/:id', async (req, res) => {
  const { id } = req.params; // Extract the ID from the request parameters

  try {
      const deletedCard = await Card.findByIdAndDelete(id); // Delete the card by ID

      if (!deletedCard) {
          return res.status(404).send({
              message: 'Card not found',
          });
      }

      res.status(200).send({
          message: 'Card deleted successfully!',
          card: deletedCard, // Optionally return the deleted card
      });
  } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).send({
          message: 'Error deleting card',
          error: error.message,
      });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log('https://business-card-backend-l7x7.onrender.com');
  
});
