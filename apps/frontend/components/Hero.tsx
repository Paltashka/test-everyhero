import { IHero } from '@everyhero/lib-types';
import Link from 'next/link';
import Image from 'next/image';

export function Hero(hero: IHero) {
    return (
        <div
            key={hero.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <Image
                    src={hero.image.url}
                    alt={hero.name}
                    width="200"
                    height="100"
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                    <Link href={hero.id}>
                        <span
                            aria-hidden="true"
                            className="absolute inset-0"
                        />
                        {hero.name}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500">
                    {hero.appearance.race} &middot; {hero.appearance.gender}
                </p>
                <div className="flex flex-1 flex-col justify-end">
                    <p className="text-base font-medium text-gray-900">${hero.price} / hour</p>
                </div>
            </div>
        </div>
    );
}
