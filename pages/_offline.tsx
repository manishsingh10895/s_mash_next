import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/Article'

export default function Offline() {
    return (
        <Layout>
            <Container>
                <Box flex={1} justifyContent={'center'} alignItems={'center'}>
                    <Heading as="h2">
                        You are offline. Please connect to the internet.
                    </Heading>
                </Box>
            </Container>
        </Layout>
    )
}
