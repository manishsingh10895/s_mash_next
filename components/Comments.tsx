import { useColorMode, useTheme } from '@chakra-ui/react'
import Giscus from '@giscus/react'
import React from 'react'

export default function Comments() {
    const { colorMode } = useColorMode();
    
    return (
        <Giscus
            strict='0'
            mapping='title'
            reactionsEnabled={'1'}
            inputPosition='top'
            loading='lazy'
            lang={'en'}
            theme={colorMode}
            repo="manishsingh10895/s_mash_next"
            repoId='R_kgDOHIltUw'
            category='General'
            categoryId='DIC_kwDOHIltU84CQpzg'
        ></Giscus>
    )

}
