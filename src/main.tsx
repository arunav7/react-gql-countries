/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, from, makeVar } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ApolloProvider } from '@apollo/client/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { theme } from './theme';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log('[Network error]', { networkError });
});

const httpLink = new HttpLink({
  uri: 'https://countries.trevorblades.com/graphql',
});

const getExtensions = new ApolloLink((operation, forward) =>
  forward(operation).map(response => {
    if (response.data && response.extensions) {
      response.data.extensions = response.extensions;
    }
    return response;
  }),
);

export const isAsianVar = makeVar(false);

const client = new ApolloClient({
  link: getExtensions.concat(from([errorLink, httpLink])),
  // uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Country: {
        fields: {
          isAsian: {
            read() {
              return isAsianVar();
            },
          },
        },
      },
    },
  }),
});

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <BrowserRouter>
          <ApolloProvider client={client}>
            <CssBaseline />
            <App />
          </ApolloProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
);
