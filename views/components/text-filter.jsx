import React from 'react';
import Input from 'govuk-react-components/components/forms/input-text';

const TextFilter = ({
  setTextFilter,
  textFilter
}) => (
  <div className="text-filter">
    <Input
      name="filter"
      onChange={(e) => setTextFilter(e.target.value)}
      label="Search"
      value={textFilter}
    />
  </div>
);

export default TextFilter;
