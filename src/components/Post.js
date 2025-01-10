import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Div, Button, Icon, Image } from 'react-native-magnus';

export default Post = ({ post }) => {
    const navigation = useNavigation();
    return (
        <Div flexDir="column" bg="white">
            <Button
                bg="transparent"
                row
                p={0}
                justifyContent="flex-start"
                onPress={() => navigation.navigate('Profile')}
            >
                <Image
                    h={40}
                    w={40}
                    m={10}
                    rounded="circle"
                    source={{
                        uri: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                    }}
                />
                <Text fontSize={18} fontWeight="bold">
                    Ahmed Gaber
                </Text>
            </Button>
            <Text fontSize={17} mx={10} mb={10}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                veritatis necessitatibus sunt quaerat nulla vel dicta voluptate
                cumque facere quos, ullam numquam incidunt sint, quidem, sit
                quo. Expedita, quidem cumque.
            </Text>
            <Image
                mx="auto"
                source={require('../../assets/hi_there.jpg')}
                h={200}
                w="100%"
            />
            <Div row>
                <Button bg="transparent">
                    <Icon
                        name="heart"
                        color="red500"
                        fontFamily="Feather"
                        fontSize={25}
                    />
                    <Text ml={5}>50</Text>
                </Button>
                <Button bg="transparent">
                    <Icon
                        name="message-circle"
                        color="blue500"
                        fontFamily="Feather"
                        fontSize={25}
                    />
                    <Text ml={5}>10</Text>
                </Button>
                <Button bg="transparent">
                    <Icon
                        name="star"
                        color="yellow500"
                        fontFamily="Feather"
                        fontSize={25}
                    />
                    <Text ml={5}>2</Text>
                </Button>
            </Div>
        </Div>
    );
};
