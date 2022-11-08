import React, { useState } from 'react';
import { Box, Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Wrap, WrapItem, Avatar, Input } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { Calendar, DateRangePicker } from 'react-date-range';
import Router from 'next/router';
import { ISelectionRange } from '../../types';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


interface Props {
    placeholder?: string
}
const CalendarPanels = ({ placeholder }: Props) => {
    const [searchBar, setSearchBar] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const selectionRange: ISelectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const search = () => {
        Router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }

    return (
        <Box onClick={() => setSearchBar(true)} onMouseLeave={() => {
            setSearchBar(false);
        }} >

            <Tabs >
                <TabList borderRadius={20} >
                    <Tab>Check in </Tab>
                    <Tab>Check out </Tab>
                    <Tab>
                        <IconButton
                            aria-label='Search database'
                            colorScheme='red'
                            borderRadius={20}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>}
                        />
                    </Tab>
                </TabList>
                {searchBar && <TabPanels  >
                    <TabPanel >
                        <Calendar onChange={(e) => setStartDate(e)} />
                    </TabPanel>
                    <TabPanel>
                        <Calendar onChange={(e) => setEndDate(e)} />
                    </TabPanel>
                    <TabPanel>
                        <Input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder={placeholder ? placeholder : "Start your search"} borderRadius={10} focusBorderColor="#FF6347" />
                        {searchInput && <Flex flexDirection={"column"} alignItems="center" justifyContent="center"> <DateRangePicker minDate={new Date()} ranges={[selectionRange]} rangeColors={["#FD5B61"]} onChange={(e) => {
                            if (e.target?.startDate && e.target.endDate) {
                                setStartDate(e.target.startDate);
                                setEndDate(e.target.endDate);
                            }
                        }} />
                            <Flex gap={4}>
                                <Text  >Number of guests: </Text> <Input value={noOfGuests} type="number" w="5vw" onChange={(e) => setNoOfGuests(Number(e.target.value))} /> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg> <br />
                                <Button ml={20}>Cancel</Button> <Button color="white" backgroundColor="red" onClick={search}>Search</Button>
                            </Flex>
                        </Flex>
                        }
                    </TabPanel>
                </TabPanels>}
            </Tabs>
        </Box>
    )
}

export default CalendarPanels;