import { post } from '../config'

export const logout = async () => {
    try {
        const { data } = await post({
            url: `/users/logout`,
        })

        localStorage.removeItem('Auth')
        return data;
    } catch (e) {
        console.log(e)
    }
}