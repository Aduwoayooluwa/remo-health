"use client"
import { Box, Text } from "@chakra-ui/react"
import React from 'react'
import DoctorList, { DoctorRec } from './addons/Doctors'
import Layout from "./Layout"

type Props = {}

const HomePage = (props: Props) => {
    return (
        <Layout>
            <Box p={6}>
                <Text fontWeight="bold" mb={5} fontSize={"xl"}>Popular Doctors</Text>

                <DoctorRec />
            </Box>
            <Box p={6}>
                <Text fontWeight="bold" mb={5} fontSize={"xl"}>Recommended Doctors</Text>
                <DoctorList />
            </Box>
      </Layout>
      
  )
}

export default HomePage