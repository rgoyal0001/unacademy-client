import { ChakraProvider } from "@chakra-ui/react"
import React from 'react';
import { Box, Image, Button, Input, Heading, InputGroup, InputLeftElement, UnorderedList, Link, Text } from '@chakra-ui/react';
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import { CourseGroup } from './CourseGroup';
import { ListItems } from './ListItems';
import { Footer } from './Footer';

export const Explore = () => {
    const [value, setValue] = React.useState("");
    const [openSearch, setOpenSearch] = React.useState(false);
    const [category, setCategory] = React.useState([]);
    const [i, setIndex] = React.useState(0);

    const [data, setSearchData] = React.useState([]);


    const handleSearch = () => {

        let search = [];

        category.forEach((el) => {
            el.courses.forEach((ele) => {
                if (value === ele.title.slice(0, value.length))
                    search.push(ele);
            })
        })
        setSearchData(search);
    }
    const debounce = () => {

        let timerId;
        return function (func) {
            if (timerId)
                clearTimeout(timerId);
            setTimeout(func, 2000);
        }
    }
    let debounc = debounce();

    React.useEffect(() => {
        (async () => {
            try {
                // let res = await fetch('http://localhost:8080/courses');
                let res = await fetch('https://unacademy-clone.onrender.com/courses');
                res = await res.json();
                // console.log(res)
                setCategory(res.course);
                console.log(category);
            } catch (error) {
                console.log(error);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <ChakraProvider>
            <Box>
                <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="200px" position="relative" backgroundSize="100%" backgroundRepeat="no-repeat" backgroundImage="https://static.uacdn.net/production/_next/static/images/goal/managegoal-test-prep-light-new.svg">
                    <Heading>Choose Your Goal</Heading>
                    <InputGroup position="absolute" background="white !important" bottom="-20px" width="28.5%" >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.600' />}
                        />
                        <Input placeholder="Search for your goal" value={value} onBlur={() => { setTimeout(() => setOpenSearch(false), 500) }} onFocus={() => { setOpenSearch(true) }} onChange={(e) => { setValue(e.target.value); debounc(handleSearch) }} />
                    </InputGroup>
                    <Box position="absolute"
                        width="28.5%"
                        backgroundColor="white"
                        top="220px"
                        left="35.8%"
                        maxHeight="400px"
                        overflowY=" scroll"
                        zIndex="1"
                        visibility={openSearch ? "visible" : "hidden"}
                        border={openSearch ? "0.05px solid grey" : "0"}
                    >{data.map((el, index) => {
                        return (
                            <Link key={index} href={`/goal/${el.title}`}>
                                <Box display="flex" justifyContent="space-between" alignItems="center"><Box display="flex"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    width="100%"
                                    cursor="pointer"
                                    margin="5px 0px"
                                >
                                    <Image width="40px" src={el.logo_url} />
                                    <Text paddingLeft="15px">{el.title}</Text>

                                </Box> <ChevronRightIcon width="7" height="7" color="gray.600" /></Box>
                            </Link>)
                    })}</Box>
                </Box>
                <Box width="1200px" margin="155px auto 0 auto" display="grid" gridTemplateColumns="repeat(24,1fr)" gap="16px" top="-56px" position="relative">
                    <UnorderedList gridColumn="span 6" position="sticky" top="100px" height="400px" paddingInlineStart="0" overflowY="auto" paddingBottom="200px">
                        {category.map((el, index) => {
                            return (<ListItems key={index} index={index} i={i} category={el.category} setIndex={setIndex} />)
                        })}
                    </UnorderedList>
                    <Box gridColumn="span 18" paddingBottom="350px" z-index="0">
                        {
                            category.map((el, index) => {
                                return (
                                    <CourseGroup key={index} el={el} index={index} />
                                )
                            })
                        }
                    </Box>
                </Box>
                <Footer />
            </Box>
        </ChakraProvider>
    )
}
