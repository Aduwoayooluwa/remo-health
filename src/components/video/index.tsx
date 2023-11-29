"use client"
import React, { useState, useEffect } from 'react'
import VideoCall from './VideoCall'
import { ChannelForm } from './addons/ChannelForm';
import { Stack, Heading, Box } from '@chakra-ui/react';
import useUserStore from '@/lib/store';
import ConnectingModal from "@/components/video/addons/ConnectingModal";

type Props = {}

const Page = ({ isCallModalOpen, setCallModalOpen }: any) => {
  const [inCall, setInCall] = useState(false);

    const { user } = useUserStore();

    function onModalClose() {
      setCallModalOpen(false)
    }
  

  return (
      <Box h="">
      {inCall ? (
        <VideoCall setInCall={setInCall} />

      ) : (
          // <ConnectingModal setInCall={setInCall} isOpen={isCallModalOpen} onClose={onModalClose} callerName={`${user?.first_name} ${user?.last_name}`} />
          <ChannelForm setInCall={setInCall} />
      )}
    </Box>
 ) 
}

export default Page