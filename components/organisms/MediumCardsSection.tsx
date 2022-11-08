
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { dataMedium } from '../../data';
import MediumCard from '../molecules/MediumCard';

const MediumCardsSection = () => {
    return (
        <Box mx={6}>
            <Text as="h2" fontWeight="bold" fontSize={25} ml={8} my={6}>Viva em qualquer lugar</Text>
            <Flex overflowX={"scroll"} justifyContent={"space-between"} wrap="nowrap"  >
                {dataMedium.map(item => <MediumCard key={item.img} img={item.img} title={item.title} />)}
            </Flex>
        </Box>
    )
}

export default MediumCardsSection;