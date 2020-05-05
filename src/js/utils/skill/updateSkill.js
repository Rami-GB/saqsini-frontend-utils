import { patch } from '../config';

export const updateSkill = async (skill_id, description) => {
    const { data } = await patch({
        url: `/skills/me/${skill_id}`,
        data: {
            description
        }
    })

    return data;
}