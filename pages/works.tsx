import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { WorkGridItem } from '../components/GridItem'
import Layout from '../components/layouts/Article'
import Section from '../components/Section'

import thumbGriffex from '../public/images/griffex.png';
import thumbNoften from '../public/images/noften.png';

export default function Works() {
    return (
        <Layout title='Works'>
            <Container>
                <Heading as="h3" fontSize={20} mb='4'>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0}>
                        <WorkGridItem title='Griffex' thumbnail={thumbGriffex}>
                            A platform focused on cryptocurrency exchange and trading.
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.1}>
                        <WorkGridItem  title='Noften NFT Marketplace' thumbnail={thumbNoften}>
                            A marketplace for NFTs for celebrities.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export { getServerSideProps } from '../components/chakra';