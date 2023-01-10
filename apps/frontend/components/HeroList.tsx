import { IHero } from '@everyhero/lib-types';
import { Hero } from './Hero';
import heros from '../mocks/heros.json';
export function HeroList() {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
                <h2 className="sr-only">Heros</h2>
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {heros?.map((hero: IHero) => (
                        <Hero
                            key={hero.id}
                            {...hero}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
