import { patch } from '../config';

export const updateProfile = async (updates = {}) => {
    const { data } = await patch({
        url: `/users/me`,
        data: updates
    })

    return data;
}

//Updates is an Objest that contains one or more
//of the following properties
// {userName, email, password, gender}
//exemple:
//const updates = {userName: 'imane', gender: 'female'}
//updateProfile()
