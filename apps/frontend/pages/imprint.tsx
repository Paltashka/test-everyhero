import { Header } from '../components/Header';

export function Index() {
    return (
        <div className="bg-white">
            <Header />
            <div className="max-w-6xl mx-auto pt-12">
                <h1 className="text-3xl font-bold my-8">Imprint</h1>
                <strong>City Administration</strong>
                <br />
                12830 Gotham
            </div>
        </div>
    );
}

export default Index;
