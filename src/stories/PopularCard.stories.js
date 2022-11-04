import React from 'react';
import PopularCard from '../components/PopularCard';

import  popularcardimage1 from "./assets/popular1.png"
import  popularcardimage2 from "./assets/popular2.png"
import  popularcardimage3 from "./assets/popular3.png"



export default {
  title: 'PopularCard',
  component: PopularCard,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <PopularCard {...args} />;


export const popularCard = Template.bind({});
popularCard.args = {
  title1: '25% OFF',
  title2: 'UP TO  ₹100',
  image: popularcardimage1
};

export const popularCard1 = Template.bind({});
popularCard1.args = {
  title1: '50% OFF',
  title2: 'UP TO  ₹300',
  image: popularcardimage2
};

export const popularCard2 = Template.bind({});
popularCard2.args = {
  title1: '50% OFF',
  title2: 'UP TO  ₹300',
  image: popularcardimage3
};