"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  HttpLink,
} from "@apollo/client";
import { ReactNode } from "react";

export interface IApolloProviderProps {
  children: ReactNode;
}

export const ApolloProvider = ({ children }: IApolloProviderProps) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL + "/graphql",
  });
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return <Provider client={apolloClient}>{children}</Provider>;
};