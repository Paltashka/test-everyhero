import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from '../components/Header';
import { HeroList } from '../components/HeroList';

const queryClient = new QueryClient();

export function HeroListPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="">
                <Header />
                <div className="max-w-6xl mx-auto">
                    <HeroList />
                </div>
            </div>
        </QueryClientProvider>
    );
}

export default HeroListPage;
