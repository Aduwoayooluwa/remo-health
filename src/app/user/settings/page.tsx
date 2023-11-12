"use client"

import HomePage from '@/user'
import UserSettingsPage from '@/user/Settings'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
        <UserSettingsPage />
    </Box>
  )
}
