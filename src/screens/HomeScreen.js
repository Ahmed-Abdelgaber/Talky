import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Fab, Button, Div, Icon, Text } from 'react-native-magnus';
import Post from '../components/Post';

export default HomeScreen = () => {
    const navigation = useNavigation();

    const fabActions = [
        {
            name: 'Create_New_Post',
            text: 'Post',
            icon: 'edit-2',
            action: () => {},
        },
        {
            name: 'Go_To_Profile',
            text: 'Profile',
            icon: 'user',
            action: () => {
                navigation.navigate('Profile');
            },
        },
    ];

    return (
        <>
            <Post />
            <Fab shadow={0} icon="plus" bg="blue600" h={60} w={60}>
                {fabActions.map((el, i) => (
                    <Button
                        key={i}
                        p="none"
                        bg="transparent"
                        justifyContent="space-evenly"
                        alignItems="center"
                        flexDir="row"
                        onPress={el.action}
                    >
                        <Icon
                            fontFamily="Feather"
                            name={el.icon}
                            color="blue600"
                            h={50}
                            w={50}
                            rounded="circle"
                            ml="md"
                            bg="white"
                        />
                    </Button>
                ))}
            </Fab>
            ;
        </>
    );
};
