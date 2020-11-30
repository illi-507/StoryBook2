import React from 'react';
import { Avatar, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

/**
 * Lo-fi avatars (at the moment)
 */

function AvatarPacked({ variant, avatar_Url, ...rest }) {
  let background;
  let color;  
  let diameter = "300px";
  let defaultAvatar = "https://bit.ly/dan-abramov";
  
  
  if (variant === 'sm') {
    background = '#E4DDDD';
    color = background;
    diameter = "78px";
    
  } else if (variant === 'md') {
    background = '#E4DDDD';
    color = background;
    diameter = "152px";
  
  } else if (variant === 'lg') {
    background = '#E4DDDD';
    color = background;    
    diameter = "159px";   
  } 
  
  
  
  if(avatar_Url == null || avatar_Url ==""){
  return (     
     <img src={defaultAvatar} alt="Avatar" style={{color:background,width:diameter,borderRadius:"50%"}}></img>
  );
  }
  else{
    return <img src={avatar_Url} alt="Avatar" style={{color:background,width:diameter,borderRadius:"50%"}}></img>
  }
}

AvatarPacked.propTypes = {
  variant: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  /**
   * Chldren should contain image
   */
  avatar_Url: PropTypes.string,
};

export default AvatarPacked;