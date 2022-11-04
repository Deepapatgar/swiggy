import React from 'react';
import HotDealCard from '../components/HotDealCard';

import img from "./Image/offer.png"
import img1 from "./Image/chicken.png"
import img3 from "./Image/foodhall.png"
import img4 from "./Image/aubree.png"

export default {
  title: 'HotDealsCards',
  component: HotDealCard,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <HotDealCard {...args} />;

export const hotDealCard = Template.bind({});
hotDealCard.args = {
 image:img,
 image1: img1,
 title:'15% OFF',
 title1:'NanduS',
 title2:'Nandus Chicken Skinless Breast...'
};
