import * as fs from 'node:fs/promises';

const fileContent = await fs.readFile('data.json', 'utf-8');
const data = JSON.parse(fileContent);

const fileWrite = async () => {
  await fs.writeFile('data.json', JSON.stringify(data, null, 2));
};

async function readNotes() {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

async function createNote(newNote) {
  const newNoteId = data.nextId;
  data.notes[newNoteId] = newNote;
  data.nextId++;
  await fileWrite();
}

async function updateNote(updateId, updateNote) {
  try {
    data.notes[updateId] = updateNote;
    await fileWrite();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

async function deleteNote(deleteId) {
  try {
    delete data.notes[deleteId];
    await fileWrite();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

const action = process.argv[2];
try {
  switch (action) {
    case 'read':
      await readNotes();
      break;
    case 'create':
      await createNote(process.argv[3]);
      break;
    case 'update':
      await updateNote(process.argv[3], process.argv[4]);
      break;
    case 'delete':
      await deleteNote(process.argv[3]);
      break;
    default:
      throw new Error(`${action} is not a feature!`);
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
