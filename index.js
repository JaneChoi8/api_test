import express from 'express'

const app = express();
const PORT = 6253;

app.listen(PORT, () => console.log (`Server running on port ${PORT}`));
const users = {
    firstname: 'Jayden Kor',
    age: "25"
}

app.get('/user', (req, res) => {
    res.send(users);
});

app.post('/api', (req, res) => {
    res.send('Post is ready');
})

app.delete('/api/:id', (req, res) => {
    const {id} = req.params;
    res.send(`This id: ${id} is removed`);
})
