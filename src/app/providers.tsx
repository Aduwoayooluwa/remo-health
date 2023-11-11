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
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) return (<Loader />);
  
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}