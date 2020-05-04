import { post } from '../config';

export const signup = async (userName, email, password) => {
    try {
        const { data } = await post({
            url: '/users',
            data: {
                userName,
                email,
                password
            }
        })
        localStorage.setItem('Auth', `Bearer ${data.token}`);
        return data;
    } catch (e) {
        console.log(e)
    }
}