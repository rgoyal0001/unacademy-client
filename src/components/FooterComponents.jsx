import React from 'react';
import { Box, Heading, Link, Image } from '@chakra-ui/react';

export const FooterComponents = () => {
    return (
        <Box gridColumn="12/25" display="flex" flexWrap="wrap">
            <Box width="33%" marginBottom="40px">
                <Heading size="xs" fontSize="14px" fontWeight="600" lineHeight="150%" margin="0px" color="#3C4852" marginBottom="16px">Company</Heading>
                <Box display="flex" flexDirection="column" >
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">About us</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">Shikshodaya</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" display="flex" alignItems="center" backgroundColor="transparent">
                        <Box display="inline" color="#7A8B94" lineHeight="150%" fontSize="14px" fontWeight="normal">Careers</Box>
                        <Box width="fit-content" borderRadius="28px" padding="1px 6px" marginLeft="8px" color="#2d81f7" background="rgba(45, 129, 247, 0.1)" marginRight="8px" fontWeight="600" fontSize="10px">we’re hiring</Box>
                    </Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">Blogs</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">Privacy Policy</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">Terms and Conditions</Link>

                </Box>
            </Box>
            <Box width="33%" marginBottom="40px">
                <Heading size="xs" fontSize="14px" fontWeight="600" lineHeight="150%" margin="0px" color="#3C4852" marginBottom="16px">Help & support</Heading>
                <Box display="flex" flexDirection="column" >
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">User Guidelines</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">Site Map</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">Refund Policy</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">Takedown Policy</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">Grievance Redressal</Link>

                </Box>
            </Box>
            <Box width="33%" marginBottom="40px">
                <Heading size="xs" fontSize="14px" fontWeight="600" lineHeight="150%" margin="0px" color="#3C4852" marginBottom="16px">Products</Heading>
                <Box display="flex" flexDirection="column" >
                    <Link lineHeight="150%" display="flex" alignItems="center" marginBottom="12px !important" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">
                        <Box boxSizing="border-box" display="inline-block" overflow="hidden" width="initial" height="initial" background="none" opacity="1" margin="0px" padding="0px" border="0px" position="relative" maxWidth="100%">
                            <Box boxSizing="border-box" display="block" width="initial" height="initial" background="none" opacity="1" margin="0px" padding="0px" border="0px" maxWidth="100%">
                                <Image display="block" width="initial" height="initial" background="none" opacity="1" margin="0px" padding="0px" border="0px" maxWidth="100%" src="https://static.uacdn.net/production/_next/static/images/footer/learner.svg?q=75&w=48"></Image>
                            </Box>
                        </Box>
                        <Box marginLeft="8px">Learner app</Box>
                    </Link>
                    <Link lineHeight="150%" display="flex" alignItems="center" marginBottom="12px !important" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">
                        <Box boxSizing="border-box" display="inline-block" overflow="hidden" width="initial" height="initial" background="none" opacity="1" margin="0px" padding="0px" border="0px" position="relative" maxWidth="100%">
                            <Box boxSizing="border-box" display="block" width="initial" height="initial" background="none" opacity="1" margin="0px" padding="0px" border="0px" maxWidth="100%">
                                <Image display="block" width="initial" height="initial" background="none" opacity="1" margin="0px" padding="0px" border="0px" maxWidth="100%" src="https://static.uacdn.net/production/_next/static/images/footer/educator.svg?q=75&w=48"></Image>
                            </Box>
                        </Box>
                        <Box marginLeft="8px">Educator app</Box>
                    </Link>
                    <Link lineHeight="150%" display="flex" alignItems="center" marginBottom="12px !important" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">
                        <Box boxSizing="border-box" display="inline-block" overflow="hidden" width="initial" height="initial" background="none" opacity="1" margin="0px" padding="0px" border="0px" position="relative" maxWidth="100%">
                            <Box boxSizing="border-box" display="block" width="initial" height="initial" background="none" opacity="1" margin="0px" padding="0px" border="0px" maxWidth="100%">
                                <Image display="block" width="initial" height="initial" background="none" opacity="1" margin="0px" padding="0px" border="0px" maxWidth="100%" src="https://static.uacdn.net/production/_next/static/images/footer/parent.svg?q=75&w=48"></Image>
                            </Box>
                        </Box>
                        <Box marginLeft="8px">Parent app</Box>
                    </Link>
                </Box>
            </Box>
            <Box width="33%" marginBottom="40px">
                <Heading size="xs" fontSize="14px" fontWeight="600" lineHeight="150%" margin="0px" color="#3C4852" marginBottom="16px">Popular goals</Heading>
                <Box display="flex" flexDirection="column" >
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">IIT JEE</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">UPSC</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">SSC</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">CSIR UGC NET</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">NEET UG</Link>

                </Box>
            </Box>
            <Box width="33%" marginBottom="40px">
                <Heading size="xs" fontSize="14px" fontWeight="600" lineHeight="150%" margin="0px" color="#3C4852" marginBottom="16px">Trending exams</Heading>
                <Box display="flex" flexDirection="column" >
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">GATE</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">CAT</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">CA</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">NTA UGC NET</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">Bank exams</Link>

                </Box>
            </Box>
            <Box width="33%" marginBottom="40px">
                <Heading size="xs" fontSize="14px" fontWeight="600" lineHeight="150%" margin="0px" color="#3C4852" marginBottom="16px">Study material</Heading>
                <Box display="flex" flexDirection="column" >
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">UPSC Study Material</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">NEET UG Study Material</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">CA Foundation Study Material</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">JEE Study Material</Link>
                    <Link marginBottom="8px" lineHeight="150%" color="#7A8B94" fontSize="14px" fontWeight="normal" transition="color 200ms ease-in-out" backgroundColor="transparent">SSC Study Material</Link>

                </Box>
            </Box>
        </Box>
    )
}
