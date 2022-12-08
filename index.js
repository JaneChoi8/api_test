import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();
const PORT = 6253;

app.use(express.json())
app.use(cors());

app.listen(PORT, () => console.log (`Server running on port ${PORT}`));

const users = [
    {
        firstname: 'Jayden',
        lastname: 'Kor',
        age: 25
    },
    {
        firstname: 'Michelle',
        lastname: 'Kor',
        age: 25
    },
]

app.get('/user', (req, res) => {
    res.send(users);
});

app.post('/user', (req, res) => {
    console.log('reached');
    console.log(req.body);

    const user = req.body;
    users.push(user);
    res.send('reached');
})

app.delete('/user/:id', (req, res) => {
    const {id} = req.params;
    res.send(`This id: ${id} is removed`);
})
