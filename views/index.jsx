import React from 'react';
import connect from '../src/helpers/connector';
import App from './layouts/app';

import moment from 'moment';

const Index = ({
  store,
  establishment: {
    name,
    licenceNumber,
    address,
    email,
    status,
    issueDate,
    licenceHolder: {
      profile: {
        id,
        name: profileName
      }
    },
    roles,
    places
  }
}) => (
  <App store={ store }>
    <h1 className="heading-xlarge">{ name }</h1>

    <dl>
      <dt>Licence number</dt>
      <dd>{ licenceNumber } </dd>

      <dt>Address</dt>
      <dd>{ address }</dd>

      <dt>Email</dt>
      <dd>{ email }</dd>

      <dt>Status</dt>
      <dd>{ status }</dd>

      <dt>Issued at</dt>
      <dd>{ moment(issueDate).format('DD/MM/YYYY') }</dd>

      <dt>Licence holder</dt>
      <dd><a href={`/profile/${id}`}>{ profileName }</a></dd>
    </dl>

    <div className="grid-row">

      <div className="column-one-half">
        <div className="data">
          <a href="/roles">
            <span className="data-item bold-xxlarge">{ roles.length }</span>
            <span className="data-item bold-small">Named people</span>
          </a>
        </div>
      </div>

      <div className="column-one-half">
        <div className="data">
          <a href="/places">
            <span className="data-item bold-xxlarge">{ places.length }</span>
            <span className="data-item bold-small">Locations</span>
          </a>
        </div>
      </div>
    </div>
  </App>
);

export default connect(Index);
