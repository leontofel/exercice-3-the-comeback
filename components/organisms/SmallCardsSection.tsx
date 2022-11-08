import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { data } from '../../data';
import SmallCard from '../molecules/SmallCard';

const SmallCardsSection = () => {
    return (
    <>
        <Box pt={6} mx={12}>
            <Text as="h2" fontWeight="bold" fontSize={25}>Explore os arredores</Text>
            <Flex wrap={"wrap"} m={3} gap={9} justifyContent={"space-evenly"}>
            {data.map((item) => {
                return <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} />
            })}
            </Flex>
        </Box>
    </>
  )
}

export default SmallCardsSection;
