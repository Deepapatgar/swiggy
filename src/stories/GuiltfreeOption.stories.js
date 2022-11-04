import React from 'react';
import GuiltfreeOption from '../components/GuiltfreeOption';

import  homelyfood from "./images/homelyfood.png";
import  mcdonalds from "./images/mcdonald.png";
import nandini from "./images/nandini-delux.png";
import andhra from "./images/andra-style.png";
import heart from "./images/heart1.png";
import star from "./images/star.png"


export default {
  title: 'GuiltfreeOption',
  component: GuiltfreeOption,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <GuiltfreeOption {...args} />;


export const guiltfreeOption = Template.bind({});
guiltfreeOption.args = {
  // title: 'SAVE BIG',
  title1: '50% OFF',
  title2: 'UP TO  ₹100',
  title3: 'homely',
  title4: '4.2 (500+) . 35mins' ,
  title5: 'options available',
  title6: 'Home Food, North Indian, South.. Rajajinagar . 3.0 km',
  title7:'% Free Delivery',
  image: homelyfood,
  image2: heart,
  image3: star,
};

export const guiltfreeOption2 = Template.bind({});
guiltfreeOption2.args = {
  // title: 'SAVE BIG',
  title1: '50% OFF',
  title2: 'UP TO  ₹150',
  title3: "McDonald's",
  title4: '4.5 (500+) . 50mins' ,
  title5: 'options available',
  title6: 'Burgers, Beverages, Cafe, Desserts.. Rajajinagar . 6.0 km',
  title7:'% Free Delivery',
  image: mcdonalds,
  image2: heart,
  image3: star,
};

export const guiltfreeOption3 = Template.bind({});
guiltfreeOption3.args = {
  // title: 'SAVE BIG',
  title1: '40% OFF',
  title2: 'UP TO  ₹100',
  title3: 'Nandini Deluxe',
  title4: '4.0 (300+) . 38mins' ,
  title5: 'options available',
  title6: 'North Indian, Chinese, Andhra.. Ganganagar . 8.0 km',
  title7:'% Free Delivery',
  image: nandini,
  image2: heart,
  image3: star,
};
export const guiltfreeOption4 = Template.bind({});
guiltfreeOption4.args = {
  // title: 'SAVE BIG',
  title1: '60% OFF',
  title2: 'UP TO  ₹100',
  title3: 'Andhra Gunpoder',
  title4: '4.1 (100+) . 30mins' ,
  title5: 'options available',
  title6: 'Andhra Biriyani, South Indian, North.. Basweshwar Nagar . 2.1 km',
  title7:'% Free Delivery',
  image: andhra,
  image2: heart,
  image3: star,
};

