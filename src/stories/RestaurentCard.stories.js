import React from 'react';
import RestaurentCard from '../components/RestaurentCard';

import img1 from "./assets/restaurent1.png"
import img2 from "./assets/star.png"
import img3 from "./assets/heart.png"
import img4 from "./assets/momos.png"
import img5 from "./assets/masal.png"


export default {
  title: 'RestaurentCard',
  component: RestaurentCard,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <RestaurentCard {...args} />;


export const restaurentCard = Template.bind({});
restaurentCard.args = {
  title: 'Hotel Rayabhari Food',
  image: img1,
  image1: img2,
  image2: img3,
  title1: '4.4(100 +) . 35min',
  title2: 'Jayanagar 2.3km',
  title3: '-',
  title4: '1',
  title5: '+'
};
export const restaurentCard1 = Template.bind({});
restaurentCard1.args = {
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

export const restaurentCard2 = Template.bind({});
restaurentCard2.args = {
  title: 'Hotel Masala Dosa',
  image: img5,
  image1: img2,
  image2: img3,
  title1: '4.4(100 +) . 35min',
  title2: 'Jayanagar 2.3km',
  title3: '-',
  title4: 'add',
  title5: '+'
};