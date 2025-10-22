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
  countries: Array<Country>;
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

export type CountryQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type CountryQuery = { __typename?: 'Query', country?: { __typename?: 'Country', code: string, emoji: string, name: string, native: string, phone: string, currency?: string | null, emojiU: string, states: Array<{ __typename?: 'State', code?: string | null, name: string }>, languages: Array<{ __typename?: 'Language', code: string, name: string, native: string, rtl: boolean }> } | null };

export type CountryMinQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type CountryMinQuery = { __typename?: 'Query', country?: { __typename?: 'Country', code: string, emoji: string, name: string, native: string, phone: string, currency?: string | null, states: Array<{ __typename?: 'State', code?: string | null, name: string }>, languages: Array<{ __typename?: 'Language', name: string, native: string }> } | null };

export type LanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type LanguagesQuery = { __typename?: 'Query', languages: Array<{ __typename?: 'Language', code: string, name: string, native: string, rtl: boolean }> };

export type LanguageQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type LanguageQuery = { __typename?: 'Query', language?: { __typename?: 'Language', code: string, name: string, native: string, rtl: boolean } | null };


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
export const CountryDocument = gql`
    query Country($code: ID!) {
  country(code: $code) {
    code
    emoji
    name
    native
    states {
      code
      name
    }
    languages {
      code
      name
      native
      rtl
    }
    phone
    currency
    emojiU
  }
}
    `;

/**
 * __useCountryQuery__
 *
 * To run a query within a React component, call `useCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryQuery(baseOptions: Apollo.QueryHookOptions<CountryQuery, CountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
      }
export function useCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryQuery, CountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
        }
export function useCountrySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountryQuery, CountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
        }
export type CountryQueryHookResult = ReturnType<typeof useCountryQuery>;
export type CountryLazyQueryHookResult = ReturnType<typeof useCountryLazyQuery>;
export type CountrySuspenseQueryHookResult = ReturnType<typeof useCountrySuspenseQuery>;
export type CountryQueryResult = Apollo.QueryResult<CountryQuery, CountryQueryVariables>;
export const CountryMinDocument = gql`
    query CountryMin($code: ID!) {
  country(code: $code) {
    code
    emoji
    name
    native
    states {
      code
      name
    }
    languages {
      name
      native
    }
    phone
    currency
  }
}
    `;

/**
 * __useCountryMinQuery__
 *
 * To run a query within a React component, call `useCountryMinQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryMinQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryMinQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryMinQuery(baseOptions: Apollo.QueryHookOptions<CountryMinQuery, CountryMinQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryMinQuery, CountryMinQueryVariables>(CountryMinDocument, options);
      }
export function useCountryMinLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryMinQuery, CountryMinQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryMinQuery, CountryMinQueryVariables>(CountryMinDocument, options);
        }
export function useCountryMinSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountryMinQuery, CountryMinQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountryMinQuery, CountryMinQueryVariables>(CountryMinDocument, options);
        }
export type CountryMinQueryHookResult = ReturnType<typeof useCountryMinQuery>;
export type CountryMinLazyQueryHookResult = ReturnType<typeof useCountryMinLazyQuery>;
export type CountryMinSuspenseQueryHookResult = ReturnType<typeof useCountryMinSuspenseQuery>;
export type CountryMinQueryResult = Apollo.QueryResult<CountryMinQuery, CountryMinQueryVariables>;
export const LanguagesDocument = gql`
    query Languages {
  languages {
    code
    name
    native
    rtl
  }
}
    `;

/**
 * __useLanguagesQuery__
 *
 * To run a query within a React component, call `useLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLanguagesQuery(baseOptions?: Apollo.QueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, options);
      }
export function useLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, options);
        }
export function useLanguagesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, options);
        }
export type LanguagesQueryHookResult = ReturnType<typeof useLanguagesQuery>;
export type LanguagesLazyQueryHookResult = ReturnType<typeof useLanguagesLazyQuery>;
export type LanguagesSuspenseQueryHookResult = ReturnType<typeof useLanguagesSuspenseQuery>;
export type LanguagesQueryResult = Apollo.QueryResult<LanguagesQuery, LanguagesQueryVariables>;
export const LanguageDocument = gql`
    query Language($code: ID!) {
  language(code: $code) {
    code
    name
    native
    rtl
  }
}
    `;

/**
 * __useLanguageQuery__
 *
 * To run a query within a React component, call `useLanguageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguageQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useLanguageQuery(baseOptions: Apollo.QueryHookOptions<LanguageQuery, LanguageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LanguageQuery, LanguageQueryVariables>(LanguageDocument, options);
      }
export function useLanguageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LanguageQuery, LanguageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LanguageQuery, LanguageQueryVariables>(LanguageDocument, options);
        }
export function useLanguageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LanguageQuery, LanguageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LanguageQuery, LanguageQueryVariables>(LanguageDocument, options);
        }
export type LanguageQueryHookResult = ReturnType<typeof useLanguageQuery>;
export type LanguageLazyQueryHookResult = ReturnType<typeof useLanguageLazyQuery>;
export type LanguageSuspenseQueryHookResult = ReturnType<typeof useLanguageSuspenseQuery>;
export type LanguageQueryResult = Apollo.QueryResult<LanguageQuery, LanguageQueryVariables>;