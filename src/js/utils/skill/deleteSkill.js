import { remove } from '../config';

export const deleteSkill = async (skill_id) => {
    const { data } = await remove({
        url: `/skills/${skill_id}`
    })

    return data;
}


//THE RESPONSE OF deleteSkill
//
const response = {
    _id: "5eb0466c9a16ea00176c9aae",
    skill: "coding",
    description: "mrid ta3 chorba",
    owner: {
        _id: "5eaf0049e241b400179fcb9c",
        userName: "malibu",
        imgUrl: "https://saqsini-api.herokuapp.com/users/5eaf0049e241b400179fcb9c/profilePicture"
    },
    createdAt: "2020-05-04T16:44:28.676Z",
    updatedAt: "2020-05-04T16:45:15.435Z",
    __v: 1,
    evaluation: 7.2 //evaluation represente la moyenne genrale attribué par les utilisateurs
}