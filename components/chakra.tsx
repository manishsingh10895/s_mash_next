import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager
} from '@chakra-ui/react'
import theme from '../libs/theme'

export default function Chakra({ cookies, children }) {
    // const colorModeManager =
    //     typeof cookies === 'string'
    //         ? cookieStorageManager(cookies)
    //         : localStorageManager

    const colorModeManager = localStorageManager;

    console.log(cookies);

    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}


export const getServerSideProps = async (context) => {
    const { req } = context;
    return {
        props: {
            cookies: req.headers.cookie ?? ''
        }
    }
}
