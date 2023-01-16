import { Box, Flex, Tag } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

export default function Tags({ tags, currentTag }) {
    if (!tags) return null;
    return (
        <Box>
            <Flex wrap={'wrap'}>
                {
                    Object.keys(tags).map(key => {
                        const activeTag = currentTag === key;
                        return <Box m={'0.5rem'} key={key}>
                            <Link href={activeTag ? '/posts/search' : `/posts/tag/${encodeURIComponent(key)}`}>
                                <Tag
                                    cursor={'pointer'}
                                    _hover={{ bgColor: 'orange.300' }}
                                    bgColor={!activeTag ? 'gray.600' : 'orange.500'}
                                    size={'md'} variant='solid'>
                                    {`${key} (${tags[key]})`}
                                </Tag>
                            </Link>
                        </Box>
                    })
                }
            </Flex>
        </Box>
    )
}
