import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000; 
const API_URL = 'https://api.tvmaze.com/search/shows';

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.post('/', (req, res) => {
    const movie = req.body.movie;
    res.render('home.ejs');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
