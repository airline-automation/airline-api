import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'hello client!' });
});

app.listen(5000, () => {
    console.log('server is running on port 5000.');
});
