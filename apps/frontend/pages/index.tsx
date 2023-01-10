import { Header } from '../components/Header';
import { HeroList } from '../components/HeroList';

export function HeroListPage() {
    return (
        <div className="">
            <Header />
            <div className="max-w-6xl mx-auto">
                <HeroList />
            </div>
        </div>
    );
}

export default HeroListPage;
