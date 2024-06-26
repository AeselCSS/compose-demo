import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(port, () => {
  console.log(`Node app listening at http://localhost:${port}`);
});
