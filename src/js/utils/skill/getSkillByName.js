import { get } from '../config';

export const getSkillByName = async (skillName) => {
    const { data } = await get({
        url: `/skills/${skillName}`
    })

    return data;
}