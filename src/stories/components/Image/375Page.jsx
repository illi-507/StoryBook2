import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

/**
 * Lo-fi cards (at the moment)
 */

function _375Page({ variant, children, ...rest }) {
  let background;     
  let height;
  let width;
  let borderRadius = "15px";
  

  if (variant === '215*178') {
    background = '#E4DDDD';    
    width = '215px';
    height = '178px';
    borderRadius = "19px";
  } 
  else if (variant === '95*69') {
    background = '#E4DDDD';    
    width = '95px';
    borderRadius = "14px";
    height = '69px';
  }else if (variant === '96*70') {
    background = '#E4DDDD';
    borderRadius = "14px";
    width = '96px';
    height = '70px';
  } else if (variant === '127*127') {
    background = '#E4DDDD';
    borderRadius = "21px";
    width = '127px';
    height = '127px';
  } else if (variant === '186*169') {
    background = '#E4DDDD';
    borderRadius = "23px";
    width = '186px';
    height = '169px';
  }

  else if (variant === '173*142') {
    background = '#E4DDDD';
    borderRadius = "17px";
    width = '173px';
    height = '142px';
  }
 
  else if (variant === '131*117') {
    background = '#E4DDDD';
    borderRadius = "17px";
    width = '131px';
    height = '117px';
    
  }

  else if (variant === '130*86') {
    background = '#E4DDDD';
    borderRadius = "17px";
    width = '130px';
    height = '86px';
  }

  return (
    <Box borderRadius={borderRadius} background={background} w={width}  h={height}> </Box>

  );
}

_375Page.propTypes = {
  variant: PropTypes.oneOf(['215*178','95*69', '96*70', '127*127', '186*169','173*142','131*117','130*86']).isRequired,
  /**
   * Chldren should contain image
   */
  children: PropTypes.string,
};

export default _375Page;