import { Box, Button, Container, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
    img: string, 
    title: string,
    description: string,
    buttonText: string,
}
const LargeCard = ({img,buttonText,description,title}: Props) => {
  return (
    <Container position="relative" cursor="pointer">
        <Box position="relative" mt={12}>
            <Image src={img} alt="large card airbnb ad" objectFit="cover" w="70vw" h="40vh" borderRadius={10} /> 
        </Box>

        <Box position="absolute" top={50} left={12}>
            <Text as="h3" fontSize={25} fontWeight="bold" >{title}</Text>
            <Text as="p" fontSize={20} >{description}</Text>
            <Button mt={3} color={"white"} backgroundColor="black" p={2} borderRadius={10} >{buttonText}</Button>
        </Box>
    </Container >
  )
}

export default LargeCard;