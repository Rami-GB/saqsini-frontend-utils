//MAKE SURE TO import the following two scripts
// before others in index.js
import 'core-js';
import "regenerator-runtime/runtime";
//--------------------
import {login} from "./utils/user/login";
import {signup} from "./utils/user/signup";
import {getOwnProfile} from "./utils/user/getOwnProfile";
import {logout} from "./utils/user/logout";
import {addSkill} from './utils/skill/addSkill';
(async () => {
    //await logout();
   const newUser = await login("fulla@gmail.com", "ironpower2000" );
   const skill = await addSkill('vueJS', "very good", newUser.token);
    console.log(skill);
    const user = await getOwnProfile(newUser.token);
    console.log(user);
})();

