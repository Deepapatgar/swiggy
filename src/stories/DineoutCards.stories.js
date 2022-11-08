import React from 'react';
import DineoutCards from '../components/DineOut';

import img1 from "./images/biergarten.png";
import img2 from "./images/brewery.jpg";
import img3 from './images/myubar.jpg';
import img4 from './images/parikasea.png';
import star from "./images/star1.png"


export default {
  title: 'DineoutCards',
  component: DineoutCards,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <DineoutCards {...args} />;

export const dineoutCards = Template.bind({});
dineoutCards.args = {
  image: img1 ,
  title: '15% OFF',
  title2: "TODAY'S DISCOUNT",
  title3: 'Biergarten',
  image1 : star,
  title4: '4.3 · 5th Block',
  title5: 'Continental, European',
  title6: '₹2400 for two'
};

export const dineoutCards2 = Template.bind({});
dineoutCards2.args = {
  image: img2 ,
  title: '15% OFF',
  title2: "TODAY'S DISCOUNT",
  title3: 'Stories Brewery and Kitchen',
  image1 : star,
  title4: '4.1 · BTM Layout',
  title5: 'Continental, Italian',
  title6: '₹2000 for two'
};

export const dineoutCards3 = Template.bind({});
dineoutCards3.args = {
  image: img3 ,
  title: '10% OFF',
  title2: "TODAY'S DISCOUNT",
  title3: "Myu Bar at Gilly's Redefined",
  image1 : star,
  title4: '4.2 · Koramangala',
  title5: 'Finger Food',
  title6: '₹2000 for two'
};

export const dineoutCards4 = Template.bind({});
dineoutCards4.args = {
  image: img4 ,
  title: '10% OFF',
  title2: "TODAY'S DISCOUNT",
  title3: "Parika SeaFood",
  image1 : star,
  title4: '4.3 · HSR Layout',
  title5: 'Mangalorean, South Indian',
  title6: '₹1400 for two'
};
