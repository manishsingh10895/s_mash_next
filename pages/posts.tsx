import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/Article'

export default function Posts() {
  return (
    <Layout>
        <Container>
            <Heading as="h3">
                Posts
            </Heading>
        </Container>
    </Layout>
  )
}
