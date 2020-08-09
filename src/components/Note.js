import React from 'react';

const Note = ({ title, content, onDelete, id }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className='note'>
      <h1>{title}</h1>
      <hr className='note-line' />
      <p>{content}</p>
      <button onClick={handleClick}>X</button>
    </div>
  );
};

export default Note;
