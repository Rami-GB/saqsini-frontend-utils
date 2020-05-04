import { remove } from '../config';

export const deleteProfile = async () => {
    const { data } = await remove({
        url: `/users/me`
    })

    return data;
}