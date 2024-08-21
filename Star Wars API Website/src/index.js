// Importing for node
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
// starting express and logging which port I'm on.
const app = express();
const port = 3000;
// Enabling express, body parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//Getting the first index.ejs file to show. 
app.get("/", (req, res) => {
    res.render("index.ejs");
  });


//When the submit button is pressed, it sends POST.
app.post('/submit-list', async (req, res) => {
  //Getting the value of which list item was pressed.
  const selectedOption = req.body.list
  console.log(selectedOption);
  if (!selectedOption) {
    console.log('Please choose a valid option.');
     // Redirect to avoid rendering without data
    //Now basically a bunch of ifs and elses. I'll explain it for spells, and its essenntially copied and pasted for the rest.
} else if (selectedOption === "World") {
  try {
    const response = await axios.get('https://swapi.dev/api/planets')
    const apiResponse = response.data.results;
    // Extract planet names and terrain (assuming terrain is a property within each planet object)
    const planetNames = apiResponse.map(planet => planet.name);
    const planetTerrains = apiResponse.map(planet => planet.terrain);
    const population = apiResponse.map(planet => planet.population);
    const climate = apiResponse.map(planet => planet.climate);
    const rotationPeriod = apiResponse.map(planet => planet.rotation_period);
    // Render the data in the EJS template, passing variables
    res.render("planets.ejs", { planetNames, planetTerrains, population, climate, rotationPeriod});

  } catch {
    console.log("Error");
  }}else if (selectedOption === "Character"){
   try{
    const response = await axios.get('https://swapi.dev/api/people')
    const apiResponse = response.data.results;
    //Extract info from the api response from people.
    const characterName = apiResponse.map(people => people.name);
    const height = apiResponse.map(people => people.height);
    const mass = apiResponse.map(people => people.mass);
    const hairColour = apiResponse.map(people => people.hair_color);
    const birthYear = apiResponse.map(people => people.birth_year);
    const gender = apiResponse.map(people => people.gender);
    res.render("characters.ejs", {characterName, height, mass, hairColour, birthYear, gender})
  }catch{
    console.log("Error")
  }}
})


  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });




  //61 planets