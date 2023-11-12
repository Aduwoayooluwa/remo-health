"use client"

import HomePage from '@/user'
import AppointmentsPage from '@/user/Appointments'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
        <AppointmentsPage />
    </Box>
  )
}
