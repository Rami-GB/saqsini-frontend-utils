import { post } from '../config';

export const addSkill = async (skillName, description) => {
    const { data } = await post({
        url: '/skills',
        data: {
            skill: skillName,
            description
        }
    })

    return data;
}