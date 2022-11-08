import { Box, Image, Flex, Text, Button, Grid, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ILocation } from '../../types';

const InfoCard = (props: ILocation) => {
    const [select, setSelect] = useState(false);

    return (
        <Flex gap={20} mt={10} cursor="pointer" shadow="0px 0px 5px 0px black" _hover={{"backgroundColor": "#ccc", "p": "6", "transition": "0.5s"}}>

            <Box pos="relative">
                <Image src={props.img} alt={"location"} w="30vw" h="20vh" />
            </Box>
            <Grid mt={5} gap={15} flexDirection="column">
                <Heading fontSize={25}>{props.location}</Heading >
                <Button gridColumn={" 2 / 2"} gridRow="span 3" background="none" _hover={{"background": "none"}} onClick={() => setSelect(!select)}>{!select ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                }</Button>
                <Text fontSize={20}>{props.title}</Text>
                <Text fontSize={15}>{props.description}</Text>
                <Text color="green">{props.price}</Text>

                <Text><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>{props.star}</Text>
            </Grid>
           
           
        </Flex>

    )
}

export default InfoCard;