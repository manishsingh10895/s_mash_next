import { getAllPosts, getPostBlocks } from '@/libs/notion'
import BLOG from '@/blog.config'
import { createHash } from 'crypto'
import Layout from '../../components/layouts/Article'
import { Box, Flex, Heading, Tag } from '@chakra-ui/react'
import { NotionRenderer } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection';
import Image from 'next/image'
import Link from 'next/link'
import formatDate from '../../libs/formatDate'
import CoverImage from '../../components/CoverImage'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
import Giscus from '@giscus/react'
import Comments from '../../components/Comments'
import dynamic from 'next/dynamic'

const mapPageUrl = id => {
    return 'https://www.notion.so/' + id.replace(/-/g, '')
}

const Code = dynamic(() =>
    import('react-notion-x/build/third-party/code').then(async (m: any) => {
        // additional prism syntaxes
        await Promise.all([
            import('prismjs/components/prism-markup-templating.js'),
            import('prismjs/components/prism-markup.js'),
            import('prismjs/components/prism-bash.js'),
            import('prismjs/components/prism-c.js'),
            import('prismjs/components/prism-cpp.js'),
            import('prismjs/components/prism-csharp.js'),
            import('prismjs/components/prism-docker.js'),
            import('prismjs/components/prism-java.js'),
            import('prismjs/components/prism-js-templates.js'),
            import('prismjs/components/prism-coffeescript.js'),
            import('prismjs/components/prism-diff.js'),
            import('prismjs/components/prism-git.js'),
            import('prismjs/components/prism-go.js'),
            import('prismjs/components/prism-graphql.js'),
            import('prismjs/components/prism-handlebars.js'),
            import('prismjs/components/prism-less.js'),
            import('prismjs/components/prism-makefile.js'),
            import('prismjs/components/prism-markdown.js'),
            import('prismjs/components/prism-objectivec.js'),
            import('prismjs/components/prism-ocaml.js'),
            import('prismjs/components/prism-python.js'),
            import('prismjs/components/prism-reason.js'),
            import('prismjs/components/prism-rust.js'),
            import('prismjs/components/prism-sass.js'),
            import('prismjs/components/prism-scss.js'),
            import('prismjs/components/prism-solidity.js'),
            import('prismjs/components/prism-sql.js'),
            import('prismjs/components/prism-stylus.js'),
            import('prismjs/components/prism-swift.js'),
            import('prismjs/components/prism-wasm.js'),
            import('prismjs/components/prism-yaml.js')
        ])
        return m.Code as any
    })
)


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

            <Box padding={'10px 0'}>
                <Comments />
            </Box>
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
