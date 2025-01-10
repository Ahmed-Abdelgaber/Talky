import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Div, Button, Icon, Image } from 'react-native-magnus';

const PostHeader = () => {
  const navigation = useNavigation();

  return (
    <Button
      bg='transparent'
      row
      p={0}
      justifyContent='flex-start'
      onPress={() => navigation.navigate('Profile')}
    >
      <Image
        h={40}
        w={40}
        m={10}
        rounded='circle'
        source={{
          uri: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        }}
      />
      <Text fontSize={18} fontWeight='bold'>
        Ahmed Gaber
      </Text>
    </Button>
  );
};

export default PostHeader;
