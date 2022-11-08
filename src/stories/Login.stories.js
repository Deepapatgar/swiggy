import React from 'react';
import Login from '../components/Login';

import loginimg from "./images/loginimg.png";

export default {
    title: 'Login',
    component: Login,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Login {...args} />;

export const login = Template.bind({});
login.args = {
    image: loginimg,
    title: 'ACCOUNT',
    title2: 'Login/Create Account quickly to manage orders',
    title3: 'LOGIN',
    title4: 'By clicking, I accept the',
    title5: 'Terms & Conditions',
    title6: 'and',
    title7: 'Privacy Policy',
};