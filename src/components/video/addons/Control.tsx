import { Box, Button, HStack, Icon, VStack } from "@chakra-ui/react";
import { useClient } from "../VideoCall";
import { useState } from "react";
import { BsFillMicMuteFill } from "react-icons/bs";
import { IoMdMic } from "react-icons/io";
import { MdVideocamOff, MdVideocam } from "react-icons/md";

export const Controls = ({ tracks, setStart, setInCall, users }: any) => {
  const client = useClient();
    //   const { tracks, setStart, setInCall } = props;
    
  const [trackState, setTrackState] = useState({ video: true, audio: true });
  
  const mute = async (type: "audio" | "video") => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };
  
  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  return (
      <VStack align="center" px={[3, 10]} justify="center" w="full" bg="#fdf7ef" bottom={10} className="controls m">
          <HStack alignSelf={"center"} w="full">
               <Box w={"100px"} p={4} bg="gray.100" textColor={"gray.600"} fontWeight="600" rounded={"md"}> {users?.length} Users</Box>
          {/* audio */}
            <Button className={trackState.audio ? "on" : ""}
                onClick={() => mute("audio")}>
                {trackState.audio ? (<Icon as={IoMdMic} />) : (<Icon as={BsFillMicMuteFill} />)}
                </Button>
                {/* end meeting */}
                {<Button bg="red.600" textColor="white" _hover={{ bg: "red.800" }} onClick={() => leaveChannel()}>End Meeting</Button>}
                
            <Button className={trackState.video ? "on" : ""}
                onClick={() => mute("video")}>
                {trackState.video ? (<Icon as={MdVideocam} />) : (<Icon as={MdVideocamOff} />)}
            </Button>
     
         </HStack>
    </VStack>
  );
};