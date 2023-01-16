import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Footer from '../Footer'

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

            </Container>

            <Container maxW="container.lg">
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
