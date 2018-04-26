import React from 'react';
import connect from '../../src/helpers/connector';
import Pdf from '../layouts/pdf';
import SortableTable from '../components/list-table';
import dictionary from '@asl/dictionary';

export const formatters = {
  firstName: {
    title: () => 'First name',
    searchable: true
  },
  lastName: {
    title: () => 'Surname',
    searchable: true
  },
  roles: {
    format: roles => {
      return roles
        .map(role => dictionary[role] || dictionary[role.toUpperCase()] || role)
        .join(', ')
    },
    title: () => 'Role'
  },
  email: {
    format: a => a,
    title: () => 'Email'
  },
  telephone: {
    format: a => a,
    title: () => 'Phone'
  }
};

const PdfList = props => {
  const { hostname, list: { schema, filtered } } = props;
  const state = props.store.getState();
  return <Pdf {...state} hostname={hostname} >
    <SortableTable schema={ schema } formatters={ formatters } data={ filtered } />
  </Pdf>;
};

export default connect(PdfList, 'list');
