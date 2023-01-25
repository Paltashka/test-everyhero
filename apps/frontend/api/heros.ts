import { BASE_URL } from '../config';

export const getAllHeros = async (options?: string) => {
    const res = await fetch(`${BASE_URL}/heros${options ? options : ''}`);
    const data = await res.json();

    return data;
};
