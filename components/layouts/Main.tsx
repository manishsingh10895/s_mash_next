import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//     ssr: false,
//     loading: () => <VoxelDogLoader />
// })

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <title>Manish  Singh - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {/* <LazyVoxelDog /> */}

                {children}

                {/* <Footer /> */}
            </Container>
        </Box>
    )
}

export default Main
