import React from 'react';
import GuiltfreeCategoryList from '../components/GuiltfreeCategoryList';

import veg from "./images/vegetarian.png";
import southind from "./images/south.png";
import northind from "./images/north.png";
import panner from "./images/panner.png";
import eggrol from "./images/eggroll.png";
import curry from "./images/curry.png";

export default {
    title: 'GuiltfreeCategoryList',
    component: GuiltfreeCategoryList,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <GuiltfreeCategoryList {...args} />;

export const guiltfreeCategoryList = Template.bind({});
guiltfreeCategoryList.args = {
    title: 'Vegetarian',
    image: veg
};
export const guiltfreeCategoryList2 = Template.bind({});
guiltfreeCategoryList2.args = {
    title2: 'South Indian',
    image: southind
};
export const guiltfreeCategoryList3 = Template.bind({});
guiltfreeCategoryList3.args = {
    title2: 'North Indian',
    image: northind
};
export const guiltfreeCategoryList4 = Template.bind({});
guiltfreeCategoryList4.args = {
    title: 'Panner',
    image: panner
};
export const guiltfreeCategoryList5 = Template.bind({});
guiltfreeCategoryList5.args = {
    title2: 'Egg-Rolls',
    image: eggrol
};
export const guiltfreeCategoryList6 = Template.bind({});
guiltfreeCategoryList6.args = {
    title: 'Curry',
    image: curry
};
