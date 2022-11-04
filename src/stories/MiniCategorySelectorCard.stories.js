import React from 'react';
import MiniCategorySelectorCard from '../components/MiniCategorySelectorCard';

import Image from "./assets/momo.png"
import Image1 from "./assets/vegetarian.png"
import Image2 from "./assets/south.png"
import Image3 from "./assets/jamun.png"
import Image4 from "./assets/samosa.png"
import Image5 from "./assets/pharata.png"
import Image6 from "./assets/panner.png"
import Image7 from "./assets/eggroll.png"
import Image8 from "./assets/curry.png"
import Image9 from "./assets/gobi.png"

export default {
    title: 'MiniCategorySelectorCard',
    component: MiniCategorySelectorCard,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <MiniCategorySelectorCard {...args} />;

export const miniCategorySelectorCard = Template.bind({});
miniCategorySelectorCard.args = {
    title: 'Momos',
    image: Image
};
export const miniCategorySelectorCard1 = Template.bind({});
miniCategorySelectorCard1.args = {
    title1: 'vegetarian',
    image: Image1
};
export const miniCategorySelectorCard2 = Template.bind({});
miniCategorySelectorCard2.args = {
    title2: 'south indian',
    image: Image2
};
export const miniCategorySelectorCard3 = Template.bind({});
miniCategorySelectorCard3.args = {
    title3: 'Gulab Jamun',
    image: Image3
};
export const miniCategorySelectorCard4 = Template.bind({});
miniCategorySelectorCard4.args = {
    title: 'Samosa',
    image: Image4
};
export const miniCategorySelectorCard5 = Template.bind({});
miniCategorySelectorCard5.args = {
    title: 'Pharata',
    image: Image5
};
export const miniCategorySelectorCard6 = Template.bind({});
miniCategorySelectorCard6.args = {
    title: 'Panner',
    image: Image6
};
export const miniCategorySelectorCard7 = Template.bind({});
miniCategorySelectorCard7.args = {
    title4: 'Egg Rolls',
    image: Image7
};
export const miniCategorySelectorCard8 = Template.bind({});
miniCategorySelectorCard8.args = {
    title5: 'Curry',
    image: Image8
};
export const miniCategorySelectorCard9 = Template.bind({});
miniCategorySelectorCard9.args = {
    title6: 'Gobi Manchuri',
    image: Image9
};