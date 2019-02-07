import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Content, StyledPage } from './Page.styles';
import defaultTheme from '../themes';
import GlobalStyles from './GlobalStyles';
import Header from './Header';

const Page = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <StyledPage>
        <Header />
        <Content>{children}</Content>
      </StyledPage>
      <GlobalStyles />
    </>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
