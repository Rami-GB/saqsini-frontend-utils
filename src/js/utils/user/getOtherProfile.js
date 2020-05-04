import { get } from '../config';

export const getOtherProfile = async (id) => {
    const {data} = await get({
        url: `/users/${id}`
    })

    return data;
}