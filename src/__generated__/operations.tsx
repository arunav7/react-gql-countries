import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID']['output'];
  countries: Array<Country>;
  name: Scalars['String']['output'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  awsRegion: Scalars['String']['output'];
  capital?: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  continent: Continent;
  currencies: Array<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  emojiU: Scalars['String']['output'];
  languages: Array<Language>;
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};


export type CountryNameArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  rtl: Scalars['Boolean']['output'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QueryContinentArgs = {
  code: Scalars['ID']['input'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country: Country;
  name: Scalars['String']['output'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Subdivision = {
  __typename?: 'Subdivision';
  code: Scalars['ID']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type GetContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', code: string, name: string, countries: Array<{ __typename?: 'Country', code: string, name: string, native: string, phone: string, currency?: string | null, emoji: string, emojiU: string, languages: Array<{ __typename?: 'Language', code: string, name: string, native: string, rtl: boolean }>, states: Array<{ __typename?: 'State', name: string, code?: string | null }> }> }> };

export type GetCountriesByIdQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type GetCountriesByIdQuery = { __typename?: 'Query', continent?: { __typename?: 'Continent', countries: Array<{ __typename?: 'Country', code: string, name: string, native: string, phone: string, currency?: string | null, emoji: string, emojiU: string, continent: { __typename?: 'Continent', name: string }, languages: Array<{ __typename?: 'Language', code: string, name: string, native: string, rtl: boolean }>, states: Array<{ __typename?: 'State', name: string, code?: string | null }> }> } | null };

export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, native: string, phone: string, currency?: string | null, emoji: string, emojiU: string, continent: { __typename?: 'Continent', name: string, code: string }, languages: Array<{ __typename?: 'Language', code: string, name: string, native: string, rtl: boolean }>, states: Array<{ __typename?: 'State', code?: string | null, name: string }> }> };


export const GetContinentsDocument = gql`
    query GetContinents {
  continents {
    code
    name
    countries {
      code
      name
      native
      phone
      currency
      languages {
        code
        name
        native
        rtl
      }
      emoji
      emojiU
      states {
        name
        code
      }
    }
  }
}
    `;

/**
 * __useGetContinentsQuery__
 *
 * To run a query within a React component, call `useGetContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContinentsQuery(baseOptions?: Apollo.QueryHookOptions<GetContinentsQuery, GetContinentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContinentsQuery, GetContinentsQueryVariables>(GetContinentsDocument, options);
      }
export function useGetContinentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContinentsQuery, GetContinentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContinentsQuery, GetContinentsQueryVariables>(GetContinentsDocument, options);
        }
export function useGetContinentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetContinentsQuery, GetContinentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetContinentsQuery, GetContinentsQueryVariables>(GetContinentsDocument, options);
        }
export type GetContinentsQueryHookResult = ReturnType<typeof useGetContinentsQuery>;
export type GetContinentsLazyQueryHookResult = ReturnType<typeof useGetContinentsLazyQuery>;
export type GetContinentsSuspenseQueryHookResult = ReturnType<typeof useGetContinentsSuspenseQuery>;
export type GetContinentsQueryResult = Apollo.QueryResult<GetContinentsQuery, GetContinentsQueryVariables>;
export const GetCountriesByIdDocument = gql`
    query GetCountriesById($code: ID!) {
  continent(code: $code) {
    countries {
      code
      name
      native
      phone
      continent {
        name
      }
      currency
      languages {
        code
        name
        native
        rtl
      }
      emoji
      emojiU
      states {
        name
        code
      }
    }
  }
}
    `;

/**
 * __useGetCountriesByIdQuery__
 *
 * To run a query within a React component, call `useGetCountriesByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesByIdQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountriesByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCountriesByIdQuery, GetCountriesByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesByIdQuery, GetCountriesByIdQueryVariables>(GetCountriesByIdDocument, options);
      }
export function useGetCountriesByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesByIdQuery, GetCountriesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesByIdQuery, GetCountriesByIdQueryVariables>(GetCountriesByIdDocument, options);
        }
export function useGetCountriesByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCountriesByIdQuery, GetCountriesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountriesByIdQuery, GetCountriesByIdQueryVariables>(GetCountriesByIdDocument, options);
        }
export type GetCountriesByIdQueryHookResult = ReturnType<typeof useGetCountriesByIdQuery>;
export type GetCountriesByIdLazyQueryHookResult = ReturnType<typeof useGetCountriesByIdLazyQuery>;
export type GetCountriesByIdSuspenseQueryHookResult = ReturnType<typeof useGetCountriesByIdSuspenseQuery>;
export type GetCountriesByIdQueryResult = Apollo.QueryResult<GetCountriesByIdQuery, GetCountriesByIdQueryVariables>;
export const GetAllCountriesDocument = gql`
    query GetAllCountries {
  countries {
    code
    name
    native
    phone
    continent {
      name
      code
    }
    currency
    languages {
      code
      name
      native
      rtl
    }
    emoji
    emojiU
    states {
      code
      name
    }
  }
}
    `;

/**
 * __useGetAllCountriesQuery__
 *
 * To run a query within a React component, call `useGetAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
      }
export function useGetAllCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
        }
export function useGetAllCountriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
        }
export type GetAllCountriesQueryHookResult = ReturnType<typeof useGetAllCountriesQuery>;
export type GetAllCountriesLazyQueryHookResult = ReturnType<typeof useGetAllCountriesLazyQuery>;
export type GetAllCountriesSuspenseQueryHookResult = ReturnType<typeof useGetAllCountriesSuspenseQuery>;
export type GetAllCountriesQueryResult = Apollo.QueryResult<GetAllCountriesQuery, GetAllCountriesQueryVariables>;