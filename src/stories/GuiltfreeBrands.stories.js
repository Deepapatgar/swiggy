import React from 'react';
import GuiltfreeBrands from '../components/GuiltfreeBrands';

import eatfit from "./images/eatfit.jpg";
import brooklyn from "./images/brooklyn.jpg";
import nutribits from "./images/nutribites.png";
import growfit from "./images/growfit.jpg";
import star from "./images/star.png";
import heart from "./images/heart1.png";


export default {
    title: 'GuiltfreeBrands',
    component: GuiltfreeBrands,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <GuiltfreeBrands {...args} />;

export const guiltfreeBrands = Template.bind({});
guiltfreeBrands.args = {
    image: eatfit,
    title: 'SAVE BIG',
    title1: '50% OFF',
    title2: 'UP TO  ₹100',
    title3: 'EatFit',
    title4: '4.2  . 32 mins',
    image2 : star,
    image3: heart,
};

export const guiltfreeBrands2 = Template.bind({});
guiltfreeBrands2.args = {
    image: brooklyn,
    title: 'SAVE BIG',
    title1: '50% OFF',
    title2: 'UP TO  ₹150',
    title3: 'The Brooklyn',
    title4: '4.5  . 43 mins',
    image2 : star,
    image3: heart,
};

export const guiltfreeBrands3 = Template.bind({});
guiltfreeBrands3.args = {
    image: nutribits,
    title: 'SAVE BIG',
    title1: '50% OFF',
    title2: 'UP TO  ₹100',
    title3: 'Nutribites',
    title4: '4.6  . 55 mins',
    image2 : star,
    image3: heart,
};

export const guiltfreeBrands4 = Template.bind({});
guiltfreeBrands4.args = {
    image: growfit,
    title: 'SAVE BIG',
    title1: '50% OFF',
    title2: 'UP TO  ₹180',
    title3: 'Grow Fit',
    title4: '4.2  . 52 mins',
    image2 : star,
    image3: heart,
};

