import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Elements UI Playground</h1>
          <p className="text-lg text-muted-foreground">
            A development environment for testing the Elements UI library components.
          </p>
        </header>

        <main className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="bg-muted p-6 rounded-lg border border-border">
              <p className="text-muted-foreground">
                This playground is set up to test the Elements UI library.
                You can import components from <code className="bg-background px-1 rounded">@bitbybit-b3/elements-react</code>
                and see them rendered here.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Design Tokens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-medium mb-2">Colors</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary-500 rounded"></div>
                    <span className="text-sm">Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-secondary-500 rounded"></div>
                    <span className="text-sm">Secondary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-accent rounded"></div>
                    <span className="text-sm">Accent</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-medium mb-2">Spacing</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-mono">xs: </span>
                    <span className="text-muted-foreground">0.25rem</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-mono">sm: </span>
                    <span className="text-muted-foreground">0.5rem</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-mono">md: </span>
                    <span className="text-muted-foreground">1rem</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Theme Toggle</h2>
            <div className="p-4 border border-border rounded-lg">
              <p className="text-muted-foreground">
                Theme switching functionality will be implemented here.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;