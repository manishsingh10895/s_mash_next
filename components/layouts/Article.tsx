import { Box, Container, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import BLOG from "../../blog.config";
import { GridItemStyle } from '../GridItem';


const variants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 50 }
}

const Layout = ({ children, title = "", description = "", ...customMeta }) => {
    const meta: any = {
        title: title || BLOG.title,
        type: 'website',
        ...customMeta
    };

    const url = BLOG.path.length ? `${BLOG.link}/${BLOG.path}` : BLOG.link

    return <motion.article
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
                        <meta name="robots" content="follow, index" />
                        <meta charSet="UTF-8" />
                        {BLOG.seo.googleSiteVerification && (
                            <meta
                                name="google-site-verification"
                                content={BLOG.seo.googleSiteVerification}
                            />
                        )}
                        {BLOG.seo.keywords && (
                            <meta name="keywords" content={BLOG.seo.keywords.join(', ')} />
                        )}
                        <meta name="description" content={meta.description} />
                        <meta property="og:locale" content={BLOG.lang} />
                        <meta property="og:title" content={meta.title} />
                        <meta property="og:description" content={meta.description} />
                        <meta
                            property="og:url"
                            content={meta.slug ? `${url}/${meta.slug}` : url}
                        />
                        <meta
                            property="og:image"
                            content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
                                meta.title
                            )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
                        />
                        <meta property="og:type" content={meta.type} />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:description" content={meta.description} />
                        <meta name="twitter:title" content={meta.title} />
                        <meta
                            name="twitter:image"
                            content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
                                meta.title
                            )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
                        />
                        {meta.type === 'article' && (
                            <>
                                <meta
                                    property="article:published_time"
                                    content={meta.date || meta.createdTime}
                                />
                                <meta property="article:author" content={BLOG.author} />
                            </>
                        )}
                    </Head>
                )
            }
            <Box marginTop={10}>
                {children}
                <GridItemStyle />
            </Box>
        </>
    </motion.article >
}

export default Layout;