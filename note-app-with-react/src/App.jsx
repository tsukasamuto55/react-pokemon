import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')));
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setActiveNote(notes[0].id);
  }, []);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'New Note',
      content: "New Note's content",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = id => {
    const filterNotes = notes.filter(note => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote);
  };

  const onUpdateNote = updatedNote => {
    const updatedNotesArray = notes.map(note => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else return note;
    });
    setNotes(updatedNotesArray);
  };
  return (
    <div className='App'>
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
