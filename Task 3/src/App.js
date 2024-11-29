import React, { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import DataFetcher from "./components/DataFetcher/DataFetcher";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <h1>Data Fetching Example</h1>
      <input
        type="text"
        placeholder="Search data..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ErrorBoundary>
        <DataFetcher searchTerm={searchTerm} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
