import { post } from './config';



export const login = async (email, password) => {
    try {
        const { data } = await post({
            url: '/users/login',
            data: {
                email,
                password
            }
        })
        console.log(data)
        localStorage.setItem('Auth', `Bearer ${data.token}`);
        return data;
    } catch (e) {
        console.log(e)
    }
}

// const email = 'n.rami@gmail.com';
// const password = 'bonjour123';

// login(email, password)
//     .then(data => {
//         console.log(data)
//     }).catch(e => {
//         console.log(e)
//     })