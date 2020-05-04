import { get } from '../config';

export const getOthersSkills = async (user_id) => {
    const { data } = await get({
        url: `/skills/user/${user_id}`
    })

    return data;
}