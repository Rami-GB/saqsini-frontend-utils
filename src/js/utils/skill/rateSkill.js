import { post } from '../config';

export const rateSkill = async (skill_Id, rate) => {
    const { data } = await post({
        url: `/skills/${skill_Id}/rate`,
        data: {
            rate
        }
    })

    return data;
}