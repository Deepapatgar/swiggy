import React from 'react';
import GourmetRestaurantCard from '../components/GourmetRestaurantCard';

import img from "./Image/smoor.png"
import img1 from "./Image/star.png"
import img3 from "./Image/foodhall.png"
import img4 from "./Image/aubree.png"

export default {
  title: 'GourmetRestaurantCard',
  component: GourmetRestaurantCard,
  parameters: {
    layout: 'fullscreen',
  }
};

const Template = (args) => <GourmetRestaurantCard {...args} />;

export const hotDealsCards = Template.bind({});
hotDealsCards.args = {
 image:img,
 image2: img1,
 title:'50% OFF UP TO ₹100',
 title1:'SMOOR',
 title2:'Desserts, Bakery',
 title3:'Koramangala .1.4 km',
 title4:'4.6 . 31 mins . ₹450 for two',
};

export const hotDealsCards1 = Template.bind({});
hotDealsCards1.args = {
  image:img3,
  title:'50% OFF UP TO ₹100',
  title1:'The Cafe By Foodhall',
  title2:'Bakery,Continental',
  title3:'Indiranagar . 6.5 km',
  title4:'3.7 . 55-65 mins . ₹1000 for two',
  image2:img1
};

export const hotDealsCards2 = Template.bind({});
hotDealsCards2.args = {
  image:img4,
  title:'50% OFF UP TO ₹100',
  title1:'Aubree',
  title2:'Desserts, Bakery',
  title3:'Koramangala .1.2 km',
  title4:'4.3 . 27 mins . ₹700 for two',
  image2:img1
};







