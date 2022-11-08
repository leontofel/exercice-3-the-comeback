import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import { format } from 'date-fns';
import { dataLocations } from '../data';
import InfoCard from '../components/molecules/InfoCard';
import { ILocation } from '../types';

function Search() {
  const router = useRouter();

  const locationArray: ILocation[] = dataLocations;

  const { noOfGuests, endDate, startDate, location } = router.query;

  const formatedStartDate = format(new Date((typeof startDate === "string" ? startDate : "")), "dd MMMM yy")
  const formatedEndDate = format(new Date((typeof endDate === "string" ? endDate : "")), "dd MMMM yy")

  return (
    <>
      <Header placeholder={`${location} - ${formatedStartDate} to ${formatedEndDate}`} />

      <Flex flexDirection="column" gap={15} mt={10} ml={10}>
        <Box >
          <Text fontSize={15}>300+ stays -{formatedStartDate} to {formatedEndDate}- for {noOfGuests || 0} guest{noOfGuests && Number(noOfGuests) > 1 ? "s" : ""}</Text>
          <Heading my={5}> Stays in {location || "Mars"}</Heading>
        </Box>
        <Flex gap={10}>
          <Button>Cancellatio Flexibility</Button>
          <Button>Type of Place</Button>
          <Button>Price</Button>
          <Button>Rooms and Beds</Button>
        </Flex>
          {locationArray.map((item) => <InfoCard key={item.img} {...item} />)}
      </Flex>
      <Footer />
    </>
  )
}

export default Search;
