import React from 'react';
import Footer from '../components/Footer';

import img1 from "./assets/home.png"
import img2 from "./assets/search.png"
import img3 from "./assets/circle.png"
import img4 from "./assets/equipment.png"
import img5 from "./assets/bill.png"
import img6 from "./assets/contact.png"

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Footer {...args} />;


export const footer = Template.bind({});
footer.args = {
  image: img1,
  image1: img2,
  image2: img3,
  image3: img4,
  image4: img5,
  image5: img6,

};