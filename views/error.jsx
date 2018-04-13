import React from 'react';
import App from './layouts/app';

const ErrorPage = ({
  error: {
    message,
    stack
  }
}) => (
  <App>
    <h1 className="heading-large">{message}</h1>
    <pre>
      {stack}
    </pre>
  </App>
);

export default ErrorPage;
