import React from 'react';
import { Text } from '@chakra-ui/react';

interface Props {
    text: string;
}
const FooterSubtitle = ({text}: Props) => <Text as="p" cursor="pointer" _hover={{"textDecoration": "underline", "color": "white"}}>{text}</Text>

export default FooterSubtitle;