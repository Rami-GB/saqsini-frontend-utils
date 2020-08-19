import { get } from '../config';

export const getOtherProfile = async (id, token) => {
    const {data} = await get({
        url: `/users/${id}`,
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    })

    return data;
}

//the response of getOthersProfile
const response = {
    gender: "male",
    _id: "5eb02f4b7fb70f001786414f",
    userName: "lomi",
    email: "k.mario@mail.com",
    imgUrl: "https://saqsini-api.herokuapp.com/users/5eb02f4b7fb70f001786414f/profilePicture",
    backgroundUrl: "https://saqsini-api.herokuapp.com/users/5eb02f4b7fb70f001786414f/backgroundPicture",
    createdAt: "2020-05-04T15:05:47.344Z",
    updatedAt: "2020-05-05T09:10:03.216Z"
}