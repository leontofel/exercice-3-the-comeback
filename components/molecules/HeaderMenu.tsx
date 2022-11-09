import { Avatar, Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'

const HeaderMenu = () => {
    return (
        <Menu >
            <MenuButton as={IconButton}  >
                <Wrap>
                    <Button mr={[0, 0, 0, 4]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <WrapItem ml={[0,0,0,2]}>
                            <Avatar name='Dan Abrahmov' w={[5, 5, 5, 5]} h="3vh" src='https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png' />
                        </WrapItem>
                    </Button>
                </Wrap>
            </MenuButton>
            <MenuList>
                <MenuItem>Sign up</MenuItem>
                <MenuItem>Login</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default HeaderMenu;