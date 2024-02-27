import React from 'react';
import { reverse } from './helpers';

function NameReversed({ nameReverse }) {
  const reversedName = reverse(nameReverse);

  return (
    <p className="name-reversed">
      Also {nameReverse} backwards is {reversedName}
    </p>
  );
}

export default NameReversed;
