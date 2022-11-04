
import React from 'react';
import LunchCard from '../components/LunchCard';

import img1 from "./assets/lunch.png"
import img2 from "./assets/lunch1.png"

export default {
  title: 'LunchCard',
  component: LunchCard,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <LunchCard {...args} />;


export const lunchCard = Template.bind({});
lunchCard.args = {
  title: 'Flat 25% OFF ',
  title1: 'UP TO  ₹100',
  image: img1
};

export const lunchCard1 = Template.bind({});
lunchCard1.args = {
  title: ' ',
  image: img2
};