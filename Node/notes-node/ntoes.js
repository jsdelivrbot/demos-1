console.log('starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const note = { title, body };

  try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (error) {

  }

  const duplicateNotes = notes.filter(note => note.title === title);
  if (!duplicateNotes.length) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }

}

const getAll = () => {
  console.log('>>getting all notes');
}

const getNote = title => {
  console.log('>>Getting note: ', title);
}

const removeNote = title => {
  console.log('>>Removing note', title);
}

module.exports = { addNote, getAll, getNote, removeNote };