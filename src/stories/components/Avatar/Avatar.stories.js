import React from 'react';

//import Card from './Card';

import AvatarPacked from './AvatarPacked';

export default {
  title: 'subset/AvatarPacked',
  component: AvatarPacked,
};

const Template = (args) => <AvatarPacked {...args} />;

/*
 * Fit 6 large cards onto the grid
 */
export const small = Template.bind({});
small.args = {
  variant: 'sm',
};

/*
 * Fit 4 large cards onto the grid
 */
export const medium = Template.bind({});
medium.args = {
  variant: 'md',
};

/*
 * Fit 3 large cards onto the grid
 */
export const large = Template.bind({});
large.args = {
  variant: 'lg',
};

