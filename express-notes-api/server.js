import express from 'express';
import * as fs from 'node:fs/promises';

const app = express();

const fileContent = await fs.readFile('data.json', 'utf-8');
const data = JSON.parse(fileContent); // Parsed Object of data.json //

const fileWrite = async () => {
  await fs.writeFile('data.json', JSON.stringify(data, null, 2));
};

app.use(express.json()); // Incoming requests become parsed //

app.get('/api/notes', (req, res) => {
  const notesArr = Object.values(data.notes); // Inputting the object into an array //
  res.status(200).send(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0 || isNaN(Number(id)) || Number(id) === 0 || (Number(id) % 1) !== 0) { // Checks to see if id is a positive integer //
    res.status(400).send({ error: 'The id MUST be a positive integer!' });
  } else if (!data.notes[id]) { // Checks to see if id exists //
    res.status(404).send({ error: `The id:${id} was NOT found!` });
  } else { // if id exists //
    res.status(200).send(data.notes[id]);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    if (!req.body.content) {
      res.status(400).send({ error: 'Content is a required field' });
    } else {
      const newNoteId = data.nextId;
      data.notes[newNoteId] = req.body;
      data.notes[newNoteId].id = newNoteId;
      data.nextId++;
      await fileWrite();
      res.status(201).send(req.body);
    }
  } catch (err) { // catches the 500 error //
    console.error(err);
    res.status(500).send({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const deleteId = req.params.id;
    if (deleteId < 0 || isNaN(Number(deleteId)) || Number(deleteId) === 0 || (Number(deleteId) % 1) !== 0) { // Checks to see if id is a positive integer //
      res.status(400).send({ error: 'The id MUST be a positive integer!' });
    } else if (!data.notes[deleteId]) { // Checks to see if id exists //
      res.status(404).send({ error: `The id:${deleteId} was NOT found!` });
    } else {
      delete data.notes[deleteId];
      await fileWrite();
      res.status(204).send();
    }
  } catch (err) { // catches the 500 error //
    console.error(err);
    res.status(500).send({ error: 'An unexpected error occurred' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const updateId = req.params.id;
    if (updateId < 0 || isNaN(Number(updateId)) || Number(updateId) === 0 || (Number(updateId) % 1) !== 0) { // Checks to see if id is a positive integer //
      res.status(400).send({ error: 'The id MUST be a positive integer!' });
    } else if (!req.body.content) { // Checks to see if content exists //
      res.status(400).send({ error: 'Content is a required field.' });
    } else if (!data.notes[updateId]) { // Checks to see if id exists //
      res.status(404).send({ error: `The id:${updateId} was NOT found!` });
    } else {
      data.notes[updateId].content = req.body.content;
      await fileWrite();
      res.status(200).send();
    }
  } catch (err) { // catches the 500 error //
    console.error(err);
    res.status(500).send({ error: 'An unexpected error occurred' });
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
