import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainScreen from './src/screens/MainScreen';

const queryClient = new QueryClient();

const Wrapper = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
};

const App: React.FC = () => {
  return (
    <Wrapper>
      <MainScreen />
    </Wrapper>
  );
};

export default App;
