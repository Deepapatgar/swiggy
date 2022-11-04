import React from 'react';
import Header from '../components/Header';

import img from "./Image/biriyani.png"

import img1 from "./Image/stars.png"
import img3 from "./Image/foodhall.png"
import img4 from "./Image/aubree.png"

export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  }
};

const Template = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {
  title1: 'Donne Biriyani House',
  image: img,
  title: '',
  title2: "South Indian",
  image1: img1,
  title3:'37 MINS',
  title4: '₹300 FOR TWO',
  title5:'50% off | Use WELCOME50',
};

export const header1 = Template.bind({});
header1.args = {
  title1: 'Sandwich Guru',
  image: img,
  title: '',
  title2: 'Snacks, Beverages',
  image1: img1,
  title3:'41 MINS',
  title4: '₹99 FOR TWO',
  title5:'40% off | Use GUILTFREE',
};
export const header2 = Template.bind({});
header2.args = {
  title1: 'Sendhoor Cofee',
  image: img,
  title: '',
  title2: 'South Indian,Indian, Beverages',
  image1: img1,
  title3:'38 MINS',
  title4: '₹200 FOR TWO',
  title5:'50% off | Use WELCOME50',
};