import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import restaurantData from './data/restaurants.js'

//create express app and port variable
const app = express();
const PORT = process.env.PORT || 3000;

//create variables for paths to files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

//App GET requests => Return html file for get requests to the different web pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

app.get('/new-restaurant', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'new-restaurant.html'));
});

//Create an ejs view within the express app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Render ejs file with imported data
app.get('/restaurants', (req, res) => {
    res.render('restaurants', { restaurantData });
});

//Start listening on the port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});