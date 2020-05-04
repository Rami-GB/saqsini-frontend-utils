import 'core-js';
import "regenerator-runtime/runtime";
import FormData from 'form-data';

import { hello } from './utils/hello';
import { login } from './utils/user/login';
import { logout } from './utils/user/logout';
import { signup } from './utils/user/signup';
import { logoutAll } from './utils/user/logoutAll'
import { getOwnProfile } from './utils/user/getOwnProfile'
import { getOtherProfile } from './utils/user/getOtherProfile'
import { deleteProfile } from './utils/user/deleteProfile';
import { updateProfile } from './utils/user/updateProfile';
import { addProfileImg } from './utils/user/addProfileImg';
import { addBackgroundImg } from './utils/user/addBackgroundImg';


const email = 'l.rami@gmail.com';
const password = 'bonjour123';
const userName = 'malibu';

(async () => {
    hello();
    console.log('je suis la');

    //let data = await login(email, password);
    let data = await login(email, password);
    console.log(data)
    const updates = { userName: 'imane', gender: 'female' }
    
    document.addEventListener('submit', async (e) => {
        e.preventDefault();
        let formData = new FormData();
        let imagefile = document.querySelector('#file');
        formData.append("backgroundPicture", imagefile.files[0]);
        try {
            await addBackgroundImg(formData);
            document.querySelector('#image').src = '';
            let data = await getOwnProfile();
            document.querySelector('#image').src = data.backgroundUrl;
        } catch (error) { console.log(error) }
    })
    //data = await getOtherProfile(data._id)
    //console.log(data)
})()