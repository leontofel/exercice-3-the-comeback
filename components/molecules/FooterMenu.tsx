import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import FooterSubtitle from '../atoms/FooterSubtitle'

interface Props {
    title: string,
    subtitles: string[],
}
const FooterMenu = ({title, subtitles}: Props) => {
  return (
    <Flex flexDirection="column" gap={5}>
            <Heading fontSize={20} as="h5">{title}</Heading>
            {subtitles.map(item => {
                return <FooterSubtitle key={item} text={item} />
            })}
    </Flex>
  )
}

export default FooterMenu