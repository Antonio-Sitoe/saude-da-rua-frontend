import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SkeletonTheme } from 'react-loading-skeleton';
import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SkeletonTheme
      baseColor={theme.colors.skeleton_base}
      highlightColor={theme.colors.skeleton_highlight}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </SkeletonTheme>
  );
};

export default App;
