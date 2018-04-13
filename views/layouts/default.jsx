import React from 'react';
import GovUK from 'govuk-react-components/components/layout';
import PhaseBanner from 'govuk-react-components/components/phase-banner';

import Breadcrumbs from '../components/breadcrumbs';

const Layout = ({
  children,
  scripts,
  crumbs
}) => (
  <GovUK
    propositionHeader="Research and testing with animals"
    stylesheets={['/public/css/app.css']}
    scripts={scripts}
  >
    <main className="main" id="content">
      <PhaseBanner phase="prototype" />
      <Breadcrumbs crumbs={crumbs} />
      <div className="grid-row">
        <div className="column-full">
          <div id="page-component">
            { children }
          </div>
        </div>
      </div>
    </main>
  </GovUK>
);

export default Layout;
