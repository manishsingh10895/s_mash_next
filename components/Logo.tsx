import Link from 'next/link'
import Image from 'next/image'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const footPrintImg = `/images/logo${useColorModeValue('', '-dark')}.svg`

    return (
        <Link href="/" scroll={false}>
            <a>
                <LogoBox>
                    <Box mr={2}>
                        <Image style={{
                        }} src={footPrintImg} width={20} height={20} alt="logo" />
                    </Box>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c", sans-serif'
                        fontWeight="bold"
                        ml={3}
                    >
                        Manish Singh
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
