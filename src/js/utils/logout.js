import { post } from './config'

export const logout = async () => {
    try {
        const corsOrigin = 'https://cors-anywhere.herokuapp.com/';
        const { data } = await post({
            url: `/users/logout`,
        })

        localStorage.removeItem('Auth')
        return data;
    } catch (e) {
        console.log(e)
    }
}