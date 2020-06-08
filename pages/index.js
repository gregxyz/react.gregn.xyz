import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';

const client = new ApolloClient({
  uri: 'https://gapi.storyblok.com/v1/api',
  request: (operation) => {
    operation.setContext({
      headers: {
        token: process.env.STORYBLOK_TOKEN,
        version: process.env.STORYBLOK_VERSION,
      },
    });
  },
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
