const url = '/skills/5ea525ae7629650d1009a821'
import { remove } from '../config';

export const deleteSkill = async (skill_id) => {
    const { data } = await remove({
        url: `/skills/${skill_id}`
    })

    return data;
}