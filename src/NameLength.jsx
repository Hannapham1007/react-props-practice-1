import React from 'react';

function NameLength({ nameLength }) {
  return (
    <p className="name-length">
      Did you know that {nameLength} is {nameLength.split(' ').join('').length} characters long?!
    </p>
  );
}

export default NameLength;
