import React, { useState } from 'react';

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const submitNote = (e) => {
    if (note.title && note.content !== '') {
      setNote({
        title: '',
        content: '',
      });
      onAdd(note);
    }
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          autoComplete='off'
          onChange={handleChange}
          value={note.title}
          name='title'
          placeholder='Title'
        />
        <hr />
        <textarea
          onChange={handleChange}
          value={note.content}
          name='content'
          placeholder='Take a note...'
          rows='3'
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
