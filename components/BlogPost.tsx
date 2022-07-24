import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/libs/formatDate'
import { Box, Text, Link as CLink, Heading } from '@chakra-ui/react'

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
