import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { themeOptions } from 'theme'
import { Menu } from '@/components/Menu'

const theme = extendTheme(themeOptions)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        minHeight="100vh"
        height="100%"
        px="20px"
        pb="10"
        bgGradient={
          'linear-gradient(97deg, rgba(26,0,40,1) 15%, rgba(5,1,8,1) 43%, rgba(5,3,14,1) 64%, rgba(9,18,62,1) 100%)'
        }
      >
        <Menu />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
