import React from 'react';

//import Card from './Card';

import Page from './1440Page';

export default {
  title: 'image/1440Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

/*
 * Fit 6 large cards onto the grid
 */
export const _400_366 = Template.bind({});
_400_366.args = {
  variant: '400*366',
};




export const _196_141 = Template.bind({});
_196_141.args = {
  variant: '196*141',
};

/*
 * Fit 3 large cards onto the grid
 */
export const _300_300 = Template.bind({});
_300_300.args = {
  variant: '300*300',
};

export const _440_400 = Template.bind({});
_440_400.args = {
  variant: '440*400',
};


export const _280_231 = Template.bind({});
_280_231.args = {
  variant: '280*231',
};

export const _213_189 = Template.bind({});
_213_189.args = {
  variant: '213*189',
};

export const _210_139 = Template.bind({});
_210_139.args = {
  variant: '210*139',
};