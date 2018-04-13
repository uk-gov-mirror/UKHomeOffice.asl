import React from 'react';

const dictionary = require('@asl/dictionary');

const Acronym = ({
  children
}) => (
  dictionary[children]
    ? <abbr title={dictionary[children]}>{children}</abbr>
    : children
);

export default Acronym;
