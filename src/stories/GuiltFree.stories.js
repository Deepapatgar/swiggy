import React from 'react';
import GuiltFree from '../components/GuiltFree';

import img1 from "./images/sweetfree.png";
import img2 from "./images/wraps.jpg";
import img3 from "./images/desserts.jpg";
import image1 from "./images/circled-right.png";



export default {
  title: 'Guiltfree',
  component: GuiltFree,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <GuiltFree {...args} />;

export const guiltFree = Template.bind({});
guiltFree.args = {
  title: 'Explore',
  image: img1 ,
  title2: 'Suger-Free Sweets',
  title3: 'by Anand Sweets',
  title4: 'Try Now',
  image2: image1,
};

export const guiltFree1 = Template.bind({});
guiltFree1.args = {
  title: 'Explore',
  image: img2 ,
  title2: 'Wholewheat Wraps',
  title3: 'by Faasos - Wraps & Rolls',
  title4: 'Try Now',
  image2: image1,
};

export const guiltFree2 = Template.bind({});
guiltFree2.args = {
  title: 'Explore',
  image: img3 ,
  title2: 'Suger-free Desserts',
  title3: 'by Artinci - Indulge Guilt Free',
  title4: 'Try Now',
  image2: image1,
};
