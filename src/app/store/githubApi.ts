import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { ISearch } from '../shared/models/types';

const graphQlUrl = 'https://api.github.com/graphql';
const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;

interface Repository {
  name: string;
  description?: string;
  primaryLanguage?: {
    name: string;
  };
  forkCount: number;
  stargazerCount: number;
  updatedAt: string;
  licenseInfo?: {
    name: string;
  };
}

export interface SearchRepositoriesResponse {
  search: {
    repositoryCount: number;
    edges: {
      node: Repository;
    }[];
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
  };
}

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: graphQlUrl,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${GITHUB_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchRepositories: builder.query<SearchRepositoriesResponse, ISearch>({
      query: ({ searchTerm, first }) => ({
        url: '',
        method: 'POST',
        body: gql`
        query($queryString: ${searchTerm}, $first: ${first}, $after: String) {
              search(query: $queryString, type: REPOSITORY, first: $first, after: $after) {
                repositoryCount
                edges {
                  node {
                    ... on Repository {
                      name
                      description
                      primaryLanguage {
                        name
                      }
                      forkCount
                      stargazerCount
                      updatedAt
                      licenseInfo {
                        name
                      }
                    }
                  }
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
        `,
        variables: {
          queryString: searchTerm,
          first,
          after: null, // Можно передать курсор для пагинации, если он есть
        }
      }),
    }),
  }),
});

export const { useSearchRepositoriesQuery } = githubApi;
