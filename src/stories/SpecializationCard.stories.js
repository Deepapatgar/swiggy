import React from 'react';
import SpecializationCard from '../components/SpecializationCard';

import img1 from "./images/offer.png"
import img2 from "./images/guiltfree.png"
import img3 from "./images/gourmet.png"


export default {
  title: 'SpecializationCard',
  component: SpecializationCard,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <SpecializationCard {...args} />;

export const specializationCard = Template.bind({});
specializationCard.args = {
  title: 'Offer Zone',
  image: img1
};

export const specializationCard1 = Template.bind({});
specializationCard1.args = {
  title: 'Guiltfree',
  image: img2

};

export const specializationCard2 = Template.bind({});
specializationCard2.args = {
  title: 'Gourmet',
  image: img3
};