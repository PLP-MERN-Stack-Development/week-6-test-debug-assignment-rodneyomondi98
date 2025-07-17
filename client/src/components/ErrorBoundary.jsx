// client/src/components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-600 rounded">
          <h3>Oops! Something went wrong.</h3>
          <p>We're working to fix the issue.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;