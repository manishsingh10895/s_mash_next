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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Manish's homepage" />
                <meta name="author" content="Manish Kumar Sing" />
                <meta name="author" content="s_mash" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@s_mash011" />
                <meta name="twitter:creator" content="@s_mash011" />
                <meta name="twitter:image" content="/card.png" />
                <meta property="og:site_name" content="Manish's Homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
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
