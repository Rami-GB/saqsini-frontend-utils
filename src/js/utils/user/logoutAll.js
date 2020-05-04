import { post } from '../config'

export const logoutAll = async () => {
    try {
        const { data } = await post({
            url: `/users/logoutAll`,
        })

        localStorage.removeItem('Auth')
        return data;
    } catch (e) {
        console.log(e)
    }
}