import React from 'react';
import { Button } from './components/atoms/Button';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React TypeScript App</h1>
      </header>
      <main>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
        <p style={{ marginTop: '2rem' }}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </main>
    </div>
  );
};

export default App;