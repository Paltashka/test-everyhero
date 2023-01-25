import { IHero } from '@everyhero/lib-types';
import { Header } from '../components/Header';
import heros from '../mocks/heros.json';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllHeros } from '../api/heros';
import Image from 'next/image';

type Data = {
    hero: IHero;
};

export async function getStaticPaths() {
    return {
        paths: new Array(731)
            .fill(0)
            .map((_o, i) => i + 1)
            .map((i) => `/${i}`),
        fallback: false, // can also be true or 'blocking'
    };
}

export const getStaticProps: GetStaticProps<Data> = async (context) => {
    const data = await getAllHeros(`?take=${context.params.hero}`);
    return {
        props: {
            hero: data?.find((hero) => hero.id === context.params.hero) as IHero,
        } as Data,
    };
};

export function HeroDetailsPage({ hero }: InferGetStaticPropsType<typeof getStaticProps>) {
    const getStatColor = (stat: string) => {
        let color = '';
        if (+stat < 50) {
            color = 'text-red-700';
        } else if (+stat >= 50 && +stat < 70) {
            color = 'text-yellow-400';
        } else {
            color = 'text-green-500';
        }
        return color;
    };

    return (
        <div className="">
            <Header />
            <div className="max-w-6xl mx-auto pt-12">
                <div className="sm:block lg:flex gap-5">
                    <div>
                        <Image src={hero.image.url} alt={hero.name} width="500" height="300" className="my-0 mx-auto" />
                        <p className="text-center text-xl mt-3 font-medium text-gray-900">
                            Price: ${hero.price} / hour
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="text-center text-3xl font-bold mb-8 w-100">{hero.name}</h1>
                        <div className="flex justify-around">
                            <div>
                                <h2 className="text-left text-xl font-bold mb-3 w-100">Appearance: </h2>
                                <p>Eye Color: {hero.appearance['eye-color']}</p>
                                <p>Gender: {hero.appearance.gender}</p>
                                <p>Hair Color: {hero.appearance['hair-color']}</p>
                                <p>Height: {hero.appearance['height']}</p>
                                <p>Weight: {hero.appearance['weight']}</p>
                            </div>
                            <div className="w-1/2 ">
                                <h2 className="text-center text-xl font-bold mb-3 w-100">Power Stats: </h2>
                                <div className="flex justify-between px-20 py-5 border">
                                    <div>
                                        <p>
                                            Combat:
                                            <span className={getStatColor(hero.powerstats.combat)}>
                                                {hero.powerstats.combat}
                                            </span>
                                        </p>
                                        <p>
                                            Durability:{' '}
                                            <span className={getStatColor(hero.powerstats.durability)}>
                                                {hero.powerstats.durability}
                                            </span>
                                        </p>
                                        <p>
                                            Intelligence:{' '}
                                            <span className={getStatColor(hero.powerstats.intelligence)}>
                                                {hero.powerstats.intelligence}
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            Power:{' '}
                                            <span className={getStatColor(hero.powerstats.power)}>
                                                {hero.powerstats.power}
                                            </span>
                                        </p>
                                        <p>
                                            Speed:{' '}
                                            <span className={getStatColor(hero.powerstats.speed)}>
                                                {hero.powerstats.speed}
                                            </span>
                                        </p>
                                        <p>
                                            Strength:{' '}
                                            <span className={getStatColor(hero.powerstats.strength)}>
                                                {hero.powerstats.strength}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className="text-xl font-bold text-center my-4">Biography: </h2>
                            <div className="flex justify-center gap-40 text-l font-[600]">
                                <div>
                                    <p>
                                        Full name:{' '}
                                        {hero.biography['full-name'] ? hero.biography['full-name'] : hero.name}
                                    </p>
                                    <p className="my-4">Place of Birth: {hero.biography['place-of-birth']}</p>
                                    <p className="my-4">Base: {hero.work.base}</p>
                                </div>
                                <div>
                                    <p>Alignment: {hero.biography.alignment}</p>
                                    <p className="my-4">First Appearance: {hero.biography['first-appearance']}</p>
                                    <p className="my-4">Occupation: {hero.work.occupation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroDetailsPage;
