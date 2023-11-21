"use client"
import React from "react"
import {Chatbot} from "@/ai/assistant/Chatbot"
import { VStack, Center, Heading } from "@chakra-ui/react";
import Navbar from "@/view/landing/pages/Navigation"

export default function page() {
    return (
        <>     
            <Navbar title={"AI"} />
            <Chatbot />
        </>
    )
}