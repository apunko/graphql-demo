import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './client';

const Provider = ({ children }: { children: React.ReactNode }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default Provider;
