const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', (req, res) => {    
    console.log(req.body);
    res.send( {
        token: 'P@nd0r@76'
    });
});

app.listen(8080, () => console.log('API is running on port 8080/login'));
