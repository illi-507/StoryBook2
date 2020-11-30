import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

/**
 * Lo-fi cards (at the moment)
 */

function _1440Page({ variant, children, ...rest }) {
  let background;     
  let height;
  let width;
  let borderRadius = "29px";
  

  if (variant === '400*366') {
    background = '#E4DDDD';    
    width = '400px';
    height = '366px';
  } 
  else if (variant === '213*189') {
    background = '#E4DDDD';    
    width = '213px';
    borderRadius = "17px";
    height = '189px';

  }else if (variant === '196*141') {
    background = '#E4DDDD';
    
    width = '196px';
    height = '141px';
    borderRadius = "30px";
  } else if (variant === '300*300') {
    background = '#E4DDDD';
    
    width = '300px';
    height = '300px';
    borderRadius = "28px";
  } else if (variant === '440*400') {
    background = '#E4DDDD';

    width = '440px';
    height = '400px';
    borderRadius = "28px";
  }

  else if (variant === '280*231') {
    background = '#E4DDDD';
    
    width = '280px';
    height = '231px';
    borderRadius = "17px";
  }
 
  else if (variant === '210*139') {
    background = '#E4DDDD';
    
    width = '210px';
    height = '139px';
    borderRadius = "17px";
  }

  return (
    <Box borderRadius={borderRadius} background={background} w={width}  h={height}> </Box>

  );
}

_1440Page.propTypes = {
  variant: PropTypes.oneOf(['400*366','213*189', '196*141', '300*300', '440*400','280*231','210*139']).isRequired,
  /**
   * Chldren should contain image
   */
  children: PropTypes.string,
};

export default _1440Page;