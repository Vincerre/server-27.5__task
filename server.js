const express = require('express');
const shortid = require('shortid');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = [
  { id: '1', author: 'John Doe', text: 'This company is worth every coin!' },
  { id: '2', author: 'Amanda Doe', text: 'They really know how to make you happy.' },
  { id: '3', author: 'Amanda Doe', text: 'This company is worth every coin!' },
  { id: '4', author: 'Amanda Doe', text: 'They really know how to make you happy.' },
];

app.get('/testimonials', (req, res) => {
  res.send(db);
});

app.get('/testimonials/random', (req, res) => {
  const randomID = db[Math.floor(Math.random() * db.length)];
  res.send(randomID);
});

app.post('/testimonials', (req, res) => {
  const id = shortid();
  const { author, text } = req.body;
  db.push({ id, author, text });
  res.send({ message: 'ok' });
});

app.get('/testimonials/:id', (req, res) => {
  const idSelect = db.find((item) => item.id === req.params.id);
  if (idSelect) {
    res.send(idSelect);
  } else {
    res.status(404).send({ message: 'Not found...' });
  }
});

app.put('/testimonials/:id', (req, res) => {
  const idSelect = db.find((item) => item.id === req.params.id);
  if (idSelect) {
    const { author, text } = req.body;
    idSelect.author = author;
    idSelect.text = text;
    // *???*
    //   db.find((item) => (item.id === req.params.id ? { ...item, author: { author }, text: { text } } : item));
    res.send({ message: 'ok' });
  } else {
    res.status(404).send({ message: 'Not found...' });
  }
});

app.delete('/testimonials/:id', (req, res) => {
  if (idSelect) {
    const idSelect = db.findIndex((item) => item.id === req.params.id);
    db.splice(idSelect, 1);
    res.send({ message: 'ok' });
  } else {
    res.status(404).send({ message: 'Not found...' });
  }
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
