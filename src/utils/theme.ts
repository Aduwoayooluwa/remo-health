import { extendTheme } from '@chakra-ui/react'
import localFont from 'next/font/local'

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

export const customFont = localFont({ src: 'fonts/tl_1.ttf' })
export const theme = extendTheme({ colors })