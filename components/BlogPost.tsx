import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/libs/formatDate'
import { Box, Text, Link as CLink, Heading, Flex, Tag } from '@chakra-ui/react'
import Tags from './Tags'

const BlogPost = ({ post }) => {
    console.log('[POST]');
    console.log(post);
    console.log();
    return (
        <Link href={`${BLOG.path}/${post.slug}`}>
            <CLink color="gray.500" textDecoration={'none'} _hover={{ textDecoration: "none", color: "gray.600" }}>
                <Box key={post.id} className="mb-6 md:mb-8">
                    <Box className="flex flex-col justify-between md:flex-row md:items-baseline">
                        <Heading fontWeight={'normal'} as="h2">
                            {post.title}
                        </Heading>
                        <Box style={{ padding: '0.5rem 0' }}>
                            {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
                        </Box>
                    </Box>

                    <Flex wrap={'wrap'} mt={2} mb={2}>
                        {post?.tags?.map(tag => (
                            <Link key={tag} href={`/posts/tag/${tag}`}>
                                <Tag m={1} cursor={'pointer'} key={tag} mr={1} size={'sm'} variant="subtle">
                                    <a>{tag}</a>
                                </Tag>
                            </Link>
                        ))}
                    </Flex>

                    <Box>
                        <Text>
                            {post.summary}
                        </Text>
                    </Box>
                </Box>
            </CLink>
        </Link>
    )
}

export default BlogPost
