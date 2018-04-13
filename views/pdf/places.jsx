import React from 'react';
import connect from '../../src/helpers/connector';
import Pdf from '../layouts/pdf';
import SortableTable from '../components/list-table';

export const formatters = {
  suitability: { format: value => value.join(', ') },
  holding: { format: value => value.join(', ') },
  nacwo: { format: (name, nacwo) => nacwo ? name : '-' }
};

const PdfList = props => {
  const { hostname, list: { schema, filtered } } = props;
  const state = props.store.getState();
  return <Pdf {...state} hostname={hostname} >
    <SortableTable schema={ schema } formatters={ formatters } data={ filtered } />
  </Pdf>;
};

export default connect(PdfList, 'list');