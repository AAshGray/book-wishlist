//import
import express from 'express';

// in memory array
const booklist = [];

const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

const PORT = 3000;

app.get('/', (req, res) => {

    res.render('home');
});

app.post('/submit', (req, res) => {
    const book = {
        title: req.body.title,
        comments: req.body.comments,
        rating: req.body.rating
    }

    booklist.push(book); 
    console.log(booklist)
    res.render('summary', { booklist });
});

app.get('/summary', (req, res) => {

    res.render('summary', { booklist });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

