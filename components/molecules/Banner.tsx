import banner from '../assets/banner.jpg';
import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';

const Banner = () => {
    return (
        <Box pos={'relative'}>
            <Image
                src={'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
                alt={"banner"}
                width="100vw"
                height="50vh"
                objectFit="cover"
                
            />
            <Box position="absolute" top={[200]} left={[70, 150, 300, 450, 550]} textAlign="center">
                <Text fontSize={20} textShadow='dark-lg'>Not sure where to go? Perfect</Text>
                <Button backgroundColor="white" boxShadow='dark-lg' fontWeight={"bold"} borderRadius={20} p={5}>I{"'"}m flexible</Button>
            </Box>
        </Box>
    )
}

export default Banner;