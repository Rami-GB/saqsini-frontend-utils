import { get } from '../config';

export const getMySkills = async () => {
    const { data } = await get({
        url: `/skills/me`
    })

    return data;
}