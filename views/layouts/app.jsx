import React from 'react';
import { Provider } from 'react-redux';
import Layout from './default';

const App = ({
  store,
  children,
  scripts,
  crumbs
}) => (
  <Provider store={ store }>
    <React.Fragment>
      <script dangerouslySetInnerHTML={{__html: `window.INITIAL_STATE=${JSON.stringify(store.getState())}`}} />
      <Layout
        scripts={scripts}
        crumbs={crumbs}
      >{ children }</Layout>
    </React.Fragment>
  </Provider>
);

export default App;
