import React from 'react';
import { Text, Div, Button, Icon } from 'react-native-magnus';

const PostActions = () => {
  return (
    <Div row>
      <Button bg='transparent'>
        <Icon name='heart' color='red500' fontFamily='Feather' fontSize={25} />
        <Text ml={5}>50</Text>
      </Button>
      <Button bg='transparent'>
        <Icon
          name='message-circle'
          color='blue500'
          fontFamily='Feather'
          fontSize={25}
        />
        <Text ml={5}>10</Text>
      </Button>
      <Button bg='transparent'>
        <Icon
          name='star'
          color='yellow500'
          fontFamily='Feather'
          fontSize={25}
        />
        <Text ml={5}>2</Text>
      </Button>
    </Div>
  );
};

export default PostActions;
