import { Button, Flex, IconButton, Text, Link, Box } from '@chakra-ui/react'
import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

export default function Footer() {
    return (
        <Box pt={10}>
            <Box w={'33%'}
                minW={'100px'}
                bgColor='teal.200'
                h={'4px'}
                borderRadius={'16px'}
                textAlign='center' margin={'auto'}>
            </Box>
            <Flex justifyContent={'center'}
                pt={4}
                alignItems='center'
                wrap={'wrap'}
            >
                <Text textAlign={'center'} minW={'250px'} mr={{ base: 0, md: 10, lg: 10, xl: 10 }}>
                    Copyright 2022 Manish Singh
                </Text>

                <Flex>
                    <Link href="https://github.com/manishsingh10895" target="_blank">
                        <IconButton
                            fontSize={'3xl'}
                            size={'lg'}
                            aria-label='Github'
                            variant="ghost"
                            colorScheme="yellow"
                            icon={<IoLogoGithub />}
                        >
                        </IconButton>
                    </Link>

                    <Link href="https://twitter.com/S_mash011" target="_blank">
                        <IconButton
                            fontSize={'3xl'}
                            size={'lg'}
                            aria-label='Twitter'
                            variant="ghost"
                            colorScheme="twitter"
                            icon={<IoLogoTwitter />}
                        >
                        </IconButton>
                    </Link>

                    <Link href="https://www.linkedin.com/in/manish-singh-a04871b8/" target="_blank">
                        <IconButton
                            fontSize={'3xl'}
                            size={'lg'}
                            aria-label='Linkedin'
                            variant="ghost"
                            colorScheme="linkedin"
                            icon={<IoLogoLinkedin />}
                        >
                        </IconButton>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}
