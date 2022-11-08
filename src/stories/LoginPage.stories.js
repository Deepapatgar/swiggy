import React from 'react';
import LoginPage from '../components/LoginPage';

// import img from "./Image/network.png"
// import img1 from "./Image/battery.png"
import img2 from "./images/cook.jpg";
import img3 from "./images/google.png";
import img4 from "./images/facebook.png";

export default {
    title: 'LoginPage',
    component: LoginPage,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <LoginPage {...args} />;


export const loginPage = Template.bind({});
loginPage.args = {
    title: '9:41',
    // image: img,
    // image1: img1,
    subtitle: 'Login',
    image2: img2,
    title1: 'Enter Email Id',
    title2: 'Login',
    title3: 'Dont have An Account?',
    title4: 'Signup',
    title5: 'OR',
    title6: 'Continue with Google',
    title7: 'Continue with Facebook',
    image3: img3,
    image4: img4

};

