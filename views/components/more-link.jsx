import React from 'react';

const MoreLink = ({
  handleClick,
  showing
}) => (
  <p>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      { showing ? 'Less' : 'More' }
    </a>
  </p>
);

export default MoreLink;
