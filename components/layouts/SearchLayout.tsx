import { useState } from 'react'
import BlogPost from '@/components/BlogPost'
import Tags from '@/components/Tags'
import PropTypes from 'prop-types'
import Layout from './Article'
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import BlogPostMetaContainer from '../BlogPostMetaContainer'

const SearchLayout = ({ tags, posts, currentTag }) => {
    const [searchValue, setSearchValue] = useState('')
    let filteredBlogPosts: any[] = []
    if (posts) {
        filteredBlogPosts = posts.filter(post => {
            const tagContent = post.tags ? post.tags.join(' ') : ''
            const searchContent = post.title + post.summary + tagContent
            return searchContent.toLowerCase().includes(searchValue.toLowerCase())
        })
    }

    return (
        <Layout>
            <Box position={'relative'}>
                <InputGroup borderColor={'gray.500'}>
                    <Input
                        type="text"
                        placeholder={
                            currentTag ? `Search in #${currentTag}` : 'Search Posts'
                        }
                        onChange={e => setSearchValue(e.target.value)}
                    />
                    <InputRightElement pointerEvents={'none'}>
                        <SearchIcon />
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Tags
                tags={tags}
                currentTag={currentTag}
            />
            <Box my={'5rem'}>
                {!filteredBlogPosts.length && (
                    <p className="text-gray-500 dark:text-gray-300">No posts found.</p>
                )}
                {filteredBlogPosts.slice(0, 20).map(post => (
                    <BlogPostMetaContainer key={post.id}>
                        <BlogPost key={post.id} post={post} />
                    </BlogPostMetaContainer>
                ))}
            </Box>
        </Layout>
    )
}

SearchLayout.propTypes = {
    posts: PropTypes.array.isRequired,
    tags: PropTypes.object.isRequired,
    currentTag: PropTypes.string
}

export default SearchLayout