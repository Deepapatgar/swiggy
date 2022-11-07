import React from 'react';
import Restaurant from '../components/Restaurant';

import img1 from "./images/restaurent1.png";
import img2 from "./images/star1.png";
import img3 from "./images/heart.png";
import img4 from "./images/momos.png";
import img5 from "./images/masala.png";


export default {
  title: 'Restaurant',
  component: Restaurant,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Restaurant {...args} />;


export const restaurant = Template.bind({});
restaurant.args = {
  title: 'Food Corner',
  image: img1,
  image1: img2,
  image2: img3,
  title1: '4.4(100 +) . 35min',
  title2: 'Jayanagar 2.3km',
  title3: '-',
  title4: '1',
  title5: '+'
};
export const restaurant1 = Template.bind({});
restaurant1.args = {
  title: 'Megha Food',
  image: img4,
  image1: img2,
  image2: img3,
  title1: '4.3(1k +) . 40min',
  title2: 'J.P Nagar 2.8km',
  title3: '-',
  title4: 'add',
  title5: '+'
};

export const restaurant2 = Template.bind({});
restaurant2.args = {
  title: 'Masala Dosa',
  image: img5,
  image1: img2,
  image2: img3,
  title1: '4.4(100 +) . 35min',
  title2: 'Rajaji Nagar 2.3km',
  title3: '-',
  title4: 'add',
  title5: '+'
};