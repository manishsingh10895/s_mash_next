import { getAllPosts, getPostBlocks } from '@/libs/notion'
import BLOG from '@/blog.config'
import { createHash } from 'crypto'
import Layout from '../../components/layouts/Article'
import { Box, Flex, Heading, Tag } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion-x'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection';
import Image from 'next/image'
import Link from 'next/link'
import formatDate from '../../libs/formatDate'
import CoverImage from '../../components/CoverImage'

const mapPageUrl = id => {
    return 'https://www.notion.so/' + id.replace(/-/g, '')
}


const BlogPost = ({ post, blockMap, emailHash }) => {
    if (!post) return null
    console.log(post);
    return (
        <Layout
            title={post.title}
            description={post.summary}
        >
            {
                <CoverImage alt={post.title} source={post.cover}
                    key={post.cover}
                />
            }

            <Heading fontWeight={'normal'} pt={7} pb={2} as="h2">
                {post.title}
            </Heading>

            <Flex mt={4} flexWrap={'wrap'} justifyContent={'space-between'}>
                <Box style={{ padding: '0.5rem 0' }}>
                    {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
                </Box>

                <Flex wrap={'wrap'} ml={2}>
                    {post?.tags?.map(tag => (
                        <Link key={tag} href={`/posts/tag/${tag}`}>
                            <Tag m={1} cursor={'pointer'} key={tag} mr={1} size={'sm'} variant="subtle">
                                <a>{tag}</a>
                            </Tag>
                        </Link>
                    ))}
                </Flex>
            </Flex>

            {
                blockMap && (
                    <Box mt={3} overflowX={'hidden'} minHeight={'100vh'}>
                        <NotionRenderer
                            previewImages={!!blockMap.preview_images}
                            recordMap={blockMap}
                            components={{
                                Code: (Code as any),
                                nextImage: Image,
                                nextLink: Link
                            }}
                            mapPageUrl={mapPageUrl}
                        />
                    </Box>
                )
            }
        </Layout >
    )
}

export async function getStaticPaths() {
    const posts = await getAllPosts({ includePages: true })
    return {
        paths: posts.map(row => `${BLOG.path}/${row.slug}`),
        fallback: true
    }
}

export async function getStaticProps({ params: { slug } }) {
    console.log('[SLUG]', slug);
    try {
        const posts = await getAllPosts({ includePages: true })
        const post = posts.find(t => t.slug === slug)
        const blockMap = await getPostBlocks(post.id)
        const emailHash = createHash('md5')
            .update(BLOG.email)
            .digest('hex')
            .trim()
            .toLowerCase()

        return {
            props: { post, blockMap, emailHash },
            revalidate: 1
        }
    } catch (error) {
        console.error(error);
        return {
            props: {
                post: null,
                blockMap: null,
                emailHash: null
            }
        }
    }
}

export default BlogPost
