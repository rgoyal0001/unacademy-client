import React from 'react';
import { Link } from 'react-scroll';
import { ListItem, Text } from '@chakra-ui/react';

export const ListItems = ({ index, i, category, setIndex }) => {

    return (
        <ListItem paddingBottom="14px" listStyleType="none" cursor="pointer" key={index}><Link activeClass="active" onSetActive={() => { setIndex(index) }} to={category} spy={true}
            smooth={true}
            offset={-70}
            duration={500}><Text fontWeight={i === index ? "bold" : "normal"} color={i === index ? "black" : "#7A8B94"} fontSize="14px">{category}</Text></Link></ListItem>
    )
}
