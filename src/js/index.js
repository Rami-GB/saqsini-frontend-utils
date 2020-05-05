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

import { addSkill } from './utils/skill/addSkill';
import { rateSkill } from './utils/skill/rateSkill';
import { getMySkills } from './utils/skill/getMySkills';
import { getOthersSkills } from './utils/skill/getOthersSkills';
import { getSkillByName } from './utils/skill/getSkillByName';
import { deleteSkill } from './utils/skill/deleteSkill';
import { updateSkill } from './utils/skill/updateSkill';


const email = 'l.rami@gmail.com';
const password = 'bonjour123';
const userName = 'malibu';

const email2 = 'g.rami@gmail.com';

(async () => {
    hello();
    console.log('je suis la');

    //let data = await login(email, password);
    let user1 = await login(email, password);
    console.log(user1)
    let skill = await addSkill('chorba', 'kilami');
    skill = await updateSkill(skill._id, 'khladar waldih');
    console.log(skill)
    user1 = await getSkillByName('chorba');
    console.log(user1)

    //data = await getOtherProfile(data._id)
    //console.log(data)
})()