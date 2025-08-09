import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Demo component for testing
function DemoApp() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Elements UI Library</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome to the Elements UI library! This is a demo app to test the library setup.
        </p>

        <div className="grid gap-6">
          <div className="p-6 border border-border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <p className="text-muted-foreground">
              This library is built with Tailwind CSS and includes design tokens,
              theme management, and React components.
            </p>
          </div>

          <div className="p-6 border border-border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Design tokens for light and dark themes</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>TypeScript support with strict mode</li>
              <li>Storybook for documentation</li>
              <li>Development playground</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Create root and render demo app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>
);