import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

/**
 * Lo-fi cards (at the moment)
 */

function _1024Page({ variant, children, ...rest }) {
  let background;     
  let height;
  let width;
  let borderRadius = "29px";
  

  if (variant === '300*249') {
    background = '#E4DDDD';    
    width = '300px';
    height = '249px';
    borderRadius = "19px";
  } 
  else if (variant === '133*97') {
    background = '#E4DDDD';    
    width = '133px';
    height = '97px';
    borderRadius = "14px";
  }else if (variant === '205*205') {
    background = '#E4DDDD';
    
    width = '205px';
    height = '205px';
    borderRadius = "21px";
  } else if (variant === '300*273') {
    background = '#E4DDDD';        
    width = '300px';
    height = '273px';
    borderRadius = "23px";
  } else if (variant === '181*149') {
    background = '#E4DDDD';

    width = '181px';
    height = '149px';
    borderRadius = "17px";
  }

  else if (variant === '138*122') {
    background = '#E4DDDD';
    
    width = '138px';
    height = '122px';
    borderRadius = "17px";
  }
 
  else if (variant === '136*90') {
    background = '#E4DDDD';
    
    width = '136px';
    height = '90px';
    borderRadius = "17px";
  }

  return (
    <Box borderRadius={borderRadius} background={background} w={width}  h={height}> </Box>

  );
}

_1024Page.propTypes = {
  variant: PropTypes.oneOf(['300*249','133*97', '205*205', '300*273', '181*149','138*122','136*90']).isRequired,
  /**
   * Chldren should contain image
   */
  children: PropTypes.string,
};

export default _1024Page;