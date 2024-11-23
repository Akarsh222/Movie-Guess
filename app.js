import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000; 
const API_URL = 'https://api.tvmaze.com/search/shows?q='

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.post('/', async (req, res) => {
    const movie = req.body.movie;
    const result = await axios.get(API_URL + movie);
    res.render('home.ejs', {data : result.data}, console.log(result.data));   
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
