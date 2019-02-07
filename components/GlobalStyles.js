import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
  body {
    color: ${({ theme }) => theme.black};
    font-family: -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
                'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    margin: 0;
  }
  a {
    text-decoration: none;
    &:focus {
      outline: thin dashed;
    }
  }
  svg {
    fill: currentColor;
  }
`;
