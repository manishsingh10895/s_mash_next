import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import BLOG from '../../blog.config'
import BlogPost from '../../components/BlogPost'
import BlogPostMetaContainer from '../../components/BlogPostMetaContainer'
import Layout from '../../components/layouts/Article'
import Pagination from '../../components/Pagination'
import { getAllPosts } from '../../libs/notion/getAllPosts'


export default function Posts({ posts, page, showNext }) {
    return (
        <Layout>
            <Box>
                <Heading as="h3">
                    Posts
                </Heading>

                <Box padding={'5rem 0'}>
                    {
                        posts.map(post => (
                            <BlogPostMetaContainer key={post.id}>
                                <BlogPost post={post} />
                            </BlogPostMetaContainer>
                        ))
                    }
                </Box>
                {showNext && <Pagination page={page} showNext={showNext} />}
            </Box>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPosts = await getAllPosts({ includePages: false })
    const posts = allPosts.slice(0, BLOG.postsPerPage)
    const totalPosts = allPosts.length
    const showNext = totalPosts > BLOG.postsPerPage
    return {
        props: {
            page: 1, // current page is 1
            posts,
            showNext
        },
        revalidate: 1
    }
}
