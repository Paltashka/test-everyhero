import { useQuery } from 'react-query';
import { getAllHeros } from '../api/heros';
import { BASE_URL } from '../config';

export const useHerosList = (options?: string) => {
    return useQuery('heros', async () => {
        const data = await getAllHeros(options);
        return data;
    });
};
