import { Box } from '@chakra-ui/react'
import React from 'react'

export default function BlogPostMetaContainer({ children }) {
    return (
        <Box padding={'2rem 0'}
            borderBottom={'2px solid'}
            borderBottomColor="gray.600"
        >
            {children}
        </Box>
    )
}
