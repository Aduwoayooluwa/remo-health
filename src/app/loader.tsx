"use client"
import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const loadingTexts = [
  "We are setting it up for you 🥰",
  "Hold on tight, we're getting things ready! Remember, good things come to those who wait... and wait... and wait some more.",
  "Just a moment, we're making everything perfect for you. Or at least trying really hard not to mess it up"
]
const radomSelector = (array: string[]) => {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}
const Loader = (props: Props) => {
  
  const loaderText = radomSelector(loadingTexts)

  return (
    <Stack h="100vh" w="full" justify={"center"} align="center">
      <div className='loader'></div>
      <Text fontSize={"sm"} fontWeight={"medium"}>{loadingTexts[0]}</Text>
    </Stack>
  )
}

export default Loader