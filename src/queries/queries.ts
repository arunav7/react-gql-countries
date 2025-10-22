import { gql } from '@apollo/client';

export const GET_ALL_CONTINENTS = gql`
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

export const GET_COUNTRIES_IN_CONTINENT = gql`
  query GetCountriesById($code: ID!) {
    continent(code: $code) {
      countries {
        # isAsian @client
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

export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      # isAsian @client
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

export const GET_COUNTRY_BY_ID = gql`
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

export const GET_COUNTRY_BY_ID_MINIMAL = gql`
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

export const GET_ALL_LANGUAGES = gql`
  query Languages {
    languages {
      code
      name
      native
      rtl
    }
  }
`;

export const GET_LANGUAGE_BY_CODE = gql`
  query Language($code: ID!) {
    language(code: $code) {
      code
      name
      native
      rtl
    }
  }
`;
