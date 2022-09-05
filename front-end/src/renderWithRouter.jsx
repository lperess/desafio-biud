// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <Router
        navigator={history}
        location={history.location}
      >
        {component}
      </Router>,
    ),
    history,
  };
};

export default renderWithRouter;
