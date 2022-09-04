import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Begin from './pages/Begin';
import Registration from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Begin />}
        />

        <Route
          path="/registration"
          element={<Registration />}
        />

        <Route
          path="*"
          element={(
            <section style={{ padding: '1rem' }}>
              <p>There is nothing here!</p>
            </section>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
