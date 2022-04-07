import { Container, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from '../GridItem';


const variants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 50 }
}

const Layout = ({ children, title = "" }) => (
    <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        style={{ position: 'relative' }}
        transition={{ duration: 0.4, type: 'easeInOut' }}
    >
        <>
            {
                title && (
                    <Head>
                        <title>{title} - Manish Singh</title>
                        <meta name="twitter:title" content={title} />
                        <meta property="og:title" content={title} />
                    </Head>
                )
            }
            <Container marginTop={10}>
                {children}
                <GridItemStyle />
            </Container>
        </>
    </motion.article>
)

export default Layout;