import 'core-js';
import "regenerator-runtime/runtime";

import { hello } from './utils/hello';
import { login } from './utils/login';
import { logout } from './utils/logout';
import { signup } from './utils/signup';

const email = 'k.rami@gmail.com';
const password = 'bonjour123';
const userName = 'malibu'

hello();
console.log('je suis la');
//login(email, password);
logout()