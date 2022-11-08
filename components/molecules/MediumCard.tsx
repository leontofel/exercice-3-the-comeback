import { Box, Image, Text, Flex } from '@chakra-ui/react';
import React from 'react';


interface Props {
    img: string,
    title: string,
}

const MediumCard = ({img, title}: Props) => {
  return (
        <Box minWidth={"45vw"}>
            <Box position="relative"  >
                <Image src={img} alt={"medium card"} w="40vw" h="60vh" cursor={"pointer"} _hover={{"p": "4", "w": "45vw", "h": "65vh", "transition": "all 0.35s ease-in-out"}}/>
            </Box>
            <Text zIndex={50} fontSize={25}>{title}</Text>
        </Box>
  )
}

export default MediumCard;