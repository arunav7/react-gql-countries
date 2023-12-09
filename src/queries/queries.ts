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
