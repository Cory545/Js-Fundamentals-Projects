import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get('/submit', async (req, res) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact'); // Replace with your API endpoint
    let fact = response.data.fact
    console.log(response.data.fact);
    res.render('facts.ejs', { fact: fact });
  } catch (error) {
    console.error('Error fetching fact:', error);
    res.send('Error fetching fact');
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});