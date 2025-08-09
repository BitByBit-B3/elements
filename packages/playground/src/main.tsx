import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Simple demo app for testing
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Elements UI Playground</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome to the Elements UI library playground!
        </p>
        <div className="grid gap-6">
          <div className="p-6 border border-border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <p className="text-muted-foreground">
              This playground is ready for testing components from the Elements UI library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);