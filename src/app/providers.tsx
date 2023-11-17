// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Loader from './loader'

export function Providers({ 
    children 
  }: Readonly<{ 
  children: React.ReactNode 
  }>) {
  
  
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}