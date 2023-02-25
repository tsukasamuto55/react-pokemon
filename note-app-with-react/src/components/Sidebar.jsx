import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({
  onAddNote,
  notes,
  deleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);
  return (
    <>
      <div className='app-sidebar'>
        <div className='app-sidebar-header'>
          <h2>Note</h2>
          <button onClick={onAddNote}>Add</button>
        </div>

        <div className='add-sidebar-notes'>
          {sortedNotes.map(note => (
            <div
              className={`app-sidebar-note ${
                note.id === activeNote && 'active'
              }`}
              key={note.id}
              onClick={() => {
                setActiveNote(note.id);
              }}
            >
              <div className='sidebar-note-title'>
                <strong>{note.title}</strong>
                <button onClick={() => deleteNote(note.id)}>Delete</button>
              </div>
              <p>{note.content}</p>
              <small>
                Last updated:{' '}
                {new Date(note.modDate).toLocaleDateString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
