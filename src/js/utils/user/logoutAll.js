import { post } from "../config";

export const logoutAll = async (token) => {
  try {
    const { data } = await post({
      url: `/users/logoutAll`,
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    localStorage.removeItem("Auth");
    return data;
  } catch (e) {
    console.log(e);
  }
};

//THE response of logoutAll
const response = {
  gender: "not specific",
  _id: "5eb12a9bf49655211b63c4d2",
  userName: "lomi",
  email: "s.mario@mail.com",
  imgUrl:
    "https://saqsini-api.herokuapp.com/users/5eb12a9bf49655211b63c4d2/profilePicture",
  backgroundUrl:
    "https://saqsini-api.herokuapp.com/users/5eb12a9bf49655211b63c4d2/backgroundPicture",
  createdAt: "2020-05-05T08:58:03.747Z",
  updatedAt: "2020-05-05T08:58:03.747Z",
  __v: 0,
};
