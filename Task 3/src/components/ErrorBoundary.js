import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const resetError = () => setHasError(false);

  const fallbackUI = (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={resetError}>Try again</button>
    </div>
  );

  if (hasError) {
    return fallbackUI;
  }

  return (
    <React.Fragment>
      {React.Children.map(children, (child) => {
        try {
          return child;
        } catch (error) {
          setHasError(true);
        }
      })}
    </React.Fragment>
  );
};

export default ErrorBoundary;
