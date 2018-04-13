import React from 'react';
import Pdf from './layouts/pdf';
import Table from './components/places-table';

const PdfList = ({
  store,
  hostname
}) => {
  const state = store.getState();
  return (
    <Pdf {...state} hostname={hostname} >
      <Table rows={ state.list.filtered } />
    </Pdf>
  );
};

export default PdfList;
