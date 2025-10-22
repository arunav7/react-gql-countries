import React from 'react';

interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to an error tracking service if you have one
    console.error('ErrorBoundary caught an error:', { error, errorInfo });
  }

  handleRetry = () => {
    // Reset state to try rendering again
    console.log('resetting state');
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      // Use provided fallback or a simple default one
      return (
        fallback || (
          <div
            style={{
              padding: '2rem',
              textAlign: 'center',
              color: '#b71c1c',
              background: '#ffebee',
              borderRadius: '8px',
            }}
          >
            <h2>Something went wrong.</h2>
            <p>{error?.message}</p>
            <button
              onClick={this.handleRetry}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#1976d2',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
          </div>
        )
      );
    }

    return children;
  }
}
