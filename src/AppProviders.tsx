import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

type Props = {
  children: JSX.Element | React.ReactNode;
};

const queryClient = new QueryClient();

const AppProviders = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
};

export default AppProviders;
