import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/libs/notion'
import BLOG from '@/blog.config'
import Layout from '../../../components/layouts/Article'
import { Box } from '@chakra-ui/react'
import BlogPostMetaContainer from '../../../components/BlogPostMetaContainer'

const Page = ({ postsToShow, page, showNext }) => {
    return (
        <Layout>
            {postsToShow &&
                postsToShow.map(post => {
                    return <BlogPostMetaContainer key={post.id}>
                        <BlogPost key={post.id} post={post} />
                    </BlogPostMetaContainer>
                })}
            <Pagination page={page} showNext={showNext} />
        </Layout>
    )
}

export async function getStaticProps(context) {
    const { page } = context.params // Get Current Page No.
    const posts = await getAllPosts({ includePages: false })
    const postsToShow = posts.slice(
        BLOG.postsPerPage * (page - 1),
        BLOG.postsPerPage * page
    )
    const totalPosts = posts.length
    const showNext = page * BLOG.postsPerPage < totalPosts
    return {
        props: {
            page, // Current Page
            postsToShow,
            showNext
        },
        revalidate: 1
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts({ includePages: false })
    const totalPosts = posts.length
    const totalPages = Math.ceil(totalPosts / BLOG.postsPerPage)
    return {
        // remove first page, we 're not gonna handle that.
        paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
            params: { page: '' + (i + 2) }
        })),
        fallback: true
    }
}

export default Page
