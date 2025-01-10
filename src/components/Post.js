import React from 'react';
import { Text, Div, Button, Icon, Image } from 'react-native-magnus';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostMediaGallery from './PostMediaGallery';
import PostActions from './PostActions';

export default Post = ({ post }) => {
  return (
    <Div flexDir='column' bg='white'>
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostMediaGallery post={post} />
      <PostActions post={post} />
    </Div>
  );
};
