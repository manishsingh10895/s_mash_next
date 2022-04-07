import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager
} from '@chakra-ui/react'
import theme from '../libs/theme'

export default function Chakra({ cookies, children }) {
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManager(cookies)
            : localStorageManager

    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}


export const getServerSideProps = async (context) => {
    const { req } = context;
    console.log('[CHAKRA SERVER SIDEPROPS]');
    console.log(req.headers.cookie);
    return {
        props: {
            cookies: req.headers.cookie ?? ''
        }
    }
}
