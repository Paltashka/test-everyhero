import { IHero } from '@everyhero/lib-types';
import { Header } from '../components/Header';
import heros from '../mocks/heros.json';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

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
    return {
        props: {
            hero: heros.find((hero) => hero.id === context.params.hero) as IHero,
        } as Data,
    };
};

export function HeroDetailsPage({ hero }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="">
            <Header />
            <div className="max-w-6xl mx-auto pt-12">
                <h1 className="text-3xl font-bold my-8">{hero.name}</h1>
                <p>To be implemented</p>
            </div>
        </div>
    );
}

export default HeroDetailsPage;
