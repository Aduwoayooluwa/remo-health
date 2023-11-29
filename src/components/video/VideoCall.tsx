import { Box, useToast } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import {
  ClientConfig,
  IAgoraRTCRemoteUser,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";
import { Videos } from "./addons/Video";
import { Controls } from "./addons/Control";
import { agoraAppId } from '@/utils';
import { generateToken } from '@/helper';
import { nanoid } from "nanoid";
import useUserStore from '@/lib/store';
import { generateRandomChannelName } from '@/utils/utils';


type Props = {
    setInCall: React.Dispatch<React.SetStateAction<boolean>>;
}

const config: ClientConfig = { 
  mode: "rtc", codec: "vp8",
};

export const appId = agoraAppId ?? "";
//export const token: string | null = '007eJxTYNil/nip7f6ZJ9+F+2322260+eX5FTv53nqeYFXvr7o5aWeRAoOpkWmKiaGJRaJhirGJYZK5hYGlhUmSuUlKcpq5YZqFkVp3WmpDICND8vvHTIwMEAjiczEUpebme6Qm5pRkMDAAAMf3I80=';

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

const VideoCall = ({  setInCall }: Props) => {
    const { user } = useUserStore();

    const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
    const [start, setStart] = useState<boolean>(false);
    const client = useClient();
    const [token, setToken] = useState("")
    const { ready, tracks } = useMicrophoneAndCameraTracks();

  const toast = useToast();

    
  let channelName = generateRandomChannelName(10);
  
  useEffect(() => {
    
    async function fetchToken() {
      const response = await generateToken({ channelName, uid: nanoid() })
      setToken(response)
    }
    
    fetchToken();
  }, [])
  

    useEffect(() => {
    // function to initialise the SDK
    let init = async (name: string) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack?.play();
        }
      });

      client.on("user-unpublished", (user, type) => {
        // console.log("unpublished", user, type);
        if (type === "audio") {
          user.audioTrack?.stop();
        }
        if (type === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        toast({
          status: "info",
          title: `${user.uid} leaving..`
        })
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      await client.join(appId, name, token, null);
      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);

    };

    if (ready && tracks) {
      init(channelName);
    }

  }, [channelName, client, ready, tracks]);
    
    return (
        <Box  h="100vh" overflow="hidden" bg="#fdf7ef">
            {/* <Box w={"100px"} p={4} bg="gray.100" textColor={"gray.600"} fontWeight="600" rounded={"md"}> {users?.length} Users</Box> */}
             {ready && tracks && (
                <Controls users={users} tracks={tracks} setStart={setStart} setInCall={setInCall} />
            )}
            {start && tracks && <Videos users={users} tracks={tracks} />}
        </Box>
    )
}

export default VideoCall
