import React from 'react'
import CustomCursor from './components/Cursor'
import { Box } from '@chakra-ui/react'
import Footer from './containers/Footer'
import Navbar from './pages/Navigation'
type Props = {}

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {

  return (
      <Box id="custom-cursor" className='cursor-chg'>
      <CustomCursor />
      <Box zIndex={40}>
        <Navbar />
          </Box>
          {children}
          <Footer />
    </Box>
  )
}

export default Layout