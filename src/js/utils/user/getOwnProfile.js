import { get } from '../config';

export const getOwnProfile = async () => {
    const {data} = await get({
        url: '/users/me'
    })

    return data;
}