import React from 'react';
import { Box, Image, Text, Link } from '@chakra-ui/react';

export const CourseGroup = ({ index, el }) => {
    return (
        <Box key={index} id={el.category} marginBottom="48px">
            <Text fontWeight="normal" fontSize="14px" lineHeight="150%" margin="0px">{el.category}</Text>
            <Box display="grid" gridTemplateColumns="repeat(18,32px)" gridColumnGap="16px">
                {
                    el.courses.map((e, ind) => {
                        return (

                            <Box key={ind} boxShadow="0px 16px 32px 0px rgba(233, 238, 242, 0.4)" gridColumn="span 6" position="relative" padding="24px" background="#FFFFFF" marginTop="16px" borderRadius="8px" display="block" alignItems="center" cursor="pointer" transition="box-shadow 0.2s ease-in-out">
                                <Link href={`/goal/${e.title}`}>
                                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" marginRight="0px" marginBottom="20px">
                                        <Box display="inline-block" boxSizing="border-box" overflow="hidden" width="initial" height="initial" background="none" opacity="1" border="0" margin="0" padding="0" position="relative" maxWidth="100%" >
                                            <Box display="block" boxSizing="border-box" width="initial" height="initial" background="none" opacity="1" border="0" margin="0" padding="0" maxWidth="100%">
                                                <Image display="block" width="50px" height="initial" background="none" opacity="1" border="0" margin="0" padding="0" src={e.logo_url} />
                                            </Box>

                                        </Box>
                                    </Box>
                                </Link>
                                <Box><Text fontWeight="600" fontSize="14px" lineHeight="150%" margin="0px">{e.title}</Text></Box>

                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
