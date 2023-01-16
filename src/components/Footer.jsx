import React from 'react';
import { Box, Divider, Heading, Text, Link, Image, Icon } from '@chakra-ui/react';
import { AppStoreLogo } from './AppStoreLogo';
import { PlayStoreLogo } from './PlayStoreLogo';
import { FooterComponents } from './FooterComponents';

export const Footer = (props) => {
    return (
        <Box opacity={props.opacity} width="100%" margin="auto" backgroundColor="#FFFFFF" marginTop="40px" padding="80px 0px 40px 0px">
            <Box maxWidth="1136px" width="100%" margin="auto">
                <Box display=" grid" gridTemplateColumns="repeat(24,1fr)"
                    gridColumnGap=" 16px"
                    gridRowGap="16px">
                    <Box gridColumn="1/11">
                        <Box marginBottom="24px">
                            <Link color="" lineHeight="150%" fontSize="12px" fontWeight="normal" alignSelf="center" height="24px" gridColumn="1/5" pointerEvents="auto" backgroundColor="transparent">
                                <Box height="24px" width="161px">
                                    <Box display="inline-block" boxSizing="border-box" overflow="hidden" width="initial" height="initial" background="none" opacity="1" border="0px" margin="0px" padding="0px" position="relative" maxWidth="100%">
                                        <Box display="block" boxSizing="border-box" width="initial" height="initial" background="none" opacity="1" border="0px" margin="0px" padding="0px" maxWidth="100%">
                                            <Image display="block" width="initial" height="initial" background="none" opacity="1" border="0px" margin="0px" padding="0px" maxWidth="100%" src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256 1x, https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384 2x" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
                            <Text fontWeight="normal" fontSize="14px" lineHeight="150%" margin="0px" width="300px" marginTop="16px" color="#7A8B94">
                                Unacademy is India’s largest online learning platform. Download our apps to start learning
                            </Text>
                        </Box>
                        <Box>
                            <Link href="https://apps.apple.com/in/app/unacademy-learning-app/id1342565069?referrer%3Dutm_source%253DFooter%2526utm_medium%253DWebApp%2526utm_campaign%253DFooter%2526" marginRight="8px" backgroundColor="transparent">
                                <AppStoreLogo />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.unacademyapp&referrer=utm_source%3DFooter%26utm_medium%3DWebApp%26utm_campaign%3DFooter%26" marginRight="8px" backgroundColor="transparent">
                                <PlayStoreLogo />
                            </Link>
                        </Box>
                        <Divider height="1px" border="none" width="40px" margin="40px 0px 24px 0px !important" boxSizing='content-box' overflow="visible" />
                        <Heading size="sm" fontWeight="600" fontSize="16px" lineHeight="150%" color="#3C4852" margin="0px">Starting your preparation?</Heading>
                        <Text color="#7A8B94" fontWeight="normal" margin="0px" width="300px" marginBottom="12px" fontSize="14px" >Call us and we will answer all your questions about learning on Unacademy</Text>
                        <Link display="flex" width="fit-content" background="transparent">
                            <Icon width="28px" height="28px" viewBox="0 0 24 24" className=""><path fillRule="evenodd" clipRule="evenodd" d="M6.53591 9.40179C5.65841 8.52429 4.99691 7.54179 4.55741 6.54504C4.46441 6.33429 4.51916 6.08754 4.68191 5.92479L5.29616 5.31054C5.79941 4.80729 5.79941 4.09554 5.35991 3.65604L4.47941 2.77629C3.89366 2.19054 2.94416 2.19054 2.35841 2.77629L1.86941 3.26454C1.31366 3.82029 1.08191 4.62204 1.23191 5.41704C1.60241 7.37679 2.74091 9.52254 4.57766 11.3593C6.41441 13.196 8.56016 14.3345 10.5199 14.705C11.3149 14.855 12.1167 14.6233 12.6724 14.0675L13.1607 13.5793C13.7464 12.9935 13.7464 12.044 13.1607 11.4583L12.2809 10.5785C11.8414 10.139 11.1289 10.139 10.6902 10.5785L10.0129 11.2565C9.85016 11.4193 9.60341 11.474 9.39266 11.381C8.39591 10.9408 7.41341 10.2785 6.53591 9.40179Z" stroke="#3C4852" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" fill="transparent"></path><path d="M8.68994 2.87753V1.12253" stroke="#3C4852" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.8174 4.11501L13.0549 2.88501" stroke="#3C4852" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.0625 7.25006H14.81" stroke="#3C4852" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"></path></Icon>
                            <Heading size="sm" fontWeight="600" fontSize="16px" lineHeight="150%" color="#3C4852" margin="0px">Call +91 8585858585 </Heading>
                        </Link>
                    </Box>
                    <FooterComponents />
                </Box>
            </Box>
        </Box>
    )
}
