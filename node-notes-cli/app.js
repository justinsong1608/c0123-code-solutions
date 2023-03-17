import * as fs from 'node:fs/promises';

async function readNotes() {
  try {
    const fileContent = await fs.readFile('data.json', 'utf-8');
    const data = JSON.parse(fileContent);
    for (const key in data.notes) {
      console.log(`${key}: ${data.notes[key]}`);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

async function createNote() {
  try {
    const newNote = process.argv[3];
    const fileContent = await fs.readFile('data.json', 'utf8');
    const data = JSON.parse(fileContent);
    const newNoteId = data.nextId;
    data.notes[newNoteId] = newNote;
    data.nextId++;
    await fs.writeFile('data.json', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

async function updateNote() {
  try {
    const updateId = process.argv[3];
    const updateNote = process.argv[4];
    const fileContent = await fs.readFile('data.json', 'utf8');
    const data = JSON.parse(fileContent);
    data.notes[updateId] = updateNote;
    await fs.writeFile('data.json', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

async function deleteNote() {
  try {
    const deleteId = process.argv[3];
    const fileContent = await fs.readFile('data.json', 'utf8');
    const data = JSON.parse(fileContent);
    delete data.notes[deleteId];
    await fs.writeFile('data.json', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

const action = process.argv[2];
switch (action) {
  case 'read':
    readNotes();
    break;
  case 'create':
    createNote();
    break;
  case 'update':
    updateNote();
    break;
  case 'delete':
    deleteNote();
    break;
  default:
    console.error('Command not found!');
}
