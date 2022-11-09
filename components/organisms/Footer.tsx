import { Flex } from '@chakra-ui/react';
import React from 'react'
import FooterMenu from '../molecules/FooterMenu';

const Footer = () => {
  return (
    <Flex justifyContent={"space-around"} mt={20} backgroundColor="#d3d3d3" p={6}>
        <FooterMenu title="ABOUT" subtitles={["How Airbnb works", "Newsroom", "Investors", "Airbnb Plus", "Airbnb Luxe"]}/>
        <FooterMenu title="COMMUNITY" subtitles={["Accessibility", "This is not a real site", "Its a pretty awesome clone", "Yeah boy Plus", "Lorem ipsum"]}/>
        <FooterMenu title="HOST" subtitles={["Sign up", "What do I need?", "Zero to hero", "Some more text", "Yet more"]}/>
        <FooterMenu  title="SUPPORT" subtitles={["Ask for help", "Trust and safety", "IEthics code", "Wubba luba dub dub", "Airbnb"]}/>
    </Flex>
  )
}

export default Footer;