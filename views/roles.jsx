import React from 'react';
import App from './layouts/app';
import connect from '../src/helpers/connector';
import FilterTable from './components/filter-table';
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
  profile: {
    format: (_, row) => <a href={`/profile/${row.id}`}>View</a>,
    title: () => 'Profile',
    sortable: false
  }
};

const Roles = ({
  store,
  establishment: { name },
  list: { schema, filtered }
}) => (
  <App store={store}
    crumbs={['Named people']}
    scripts={['/public/js/pages/roles.js']}
  >
    <h2 className="headline">{name}</h2>
    <h1>Named people</h1>
    <FilterTable schema={ schema } formatters={ formatters } data={ filtered } />
  </App>
);

export default connect(Roles, 'list');
