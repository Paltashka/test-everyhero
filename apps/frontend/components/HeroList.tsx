import { IHero } from '@everyhero/lib-types';
import { Hero } from './Hero';
import { useHerosList } from '../hooks/heros';
import { Select } from './Select';
import { useEffect, useState } from 'react';

export function HeroList() {
    const [filter, setFilter] = useState('');
    const [loadCount, setLoadCount] = useState(9);
    let heros = useHerosList(`?filter=${filter}&take=${loadCount}`);

    useEffect(() => {
        heros.refetch();
    }, [filter, loadCount]);

    return (
        <div className="">
            <Select value={filter} setValue={setFilter} />
            <div className="mx-auto max-w-2xl py-5 sm:py-5 lg:max-w-7xl">
                <h2 className="sr-only">Heros</h2>
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {heros?.data && heros?.data.map((hero: IHero) => <Hero key={hero.id} {...hero} />)}
                </div>
            </div>
            <div className="flex justify-center mb-10">
                <button
                    className="rounded-md border border-transparent bg-teal-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75 text-center"
                    onClick={(e) => setLoadCount(loadCount + 9)}
                >
                    Load More
                </button>
            </div>
        </div>
    );
}
