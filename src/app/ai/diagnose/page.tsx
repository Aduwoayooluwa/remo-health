"use client"
import React from "react"
import AIDiagnose from "@/ai/diagnose";
import { VStack } from "@chakra-ui/react"
import Navbar from "@/view/landing/pages/Navigation"
export default function Diagnose() {
    return (
        <VStack bg="#fdf7ef" h="100vh" maxH="100vh">
            <Navbar title={"Diagnose AI"} />
            <AIDiagnose />
        </VStack>
    )
}