import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    img: string,
    location: string,
    distance: string,
}
const SmallCard = ({img, location, distance}: Props) => {
  return (
    <Flex flexDirection={"column"} alignItems="center"  mt={4} cursor="pointer" _hover={{"backgroundColor": "#ccc", "p": "6", "transition": "0.3s", "borderRadius": "20" }}>
        <Box>
            <Image alt="location image" src={img} h={["30vh", "25vh","16vh"]} w={["50vw", "30vw", "16vw","16vw", "16vw"]} borderRadius={10}/>
        </Box>
        <Box>
            <Text as="h2" fontSize={30}>{location}</Text>
            <Text as="h3" fontSize={15}>{distance}</Text>
        </Box>
    </Flex>
  )
}

export default SmallCard;