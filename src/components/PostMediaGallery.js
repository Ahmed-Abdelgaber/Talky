import React from 'react';
import { Image } from 'react-native-magnus';

const PostMediaGallery = () => {
  return (
    <Image
      mx='auto'
      source={require('../../assets/hi_there.jpg')}
      h={200}
      w='100%'
    />
  );
};

export default PostMediaGallery;
