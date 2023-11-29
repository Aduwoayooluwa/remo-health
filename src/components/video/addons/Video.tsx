import { Box } from "@chakra-ui/react";
import {
  AgoraVideoPlayer,
} from "agora-rtc-react";
import {
  IAgoraRTCRemoteUser,
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";


export const Videos = (props: {
  users: IAgoraRTCRemoteUser[];
  tracks: [IMicrophoneAudioTrack, ICameraVideoTrack];
}) => {
    const { users, tracks } = props;


  return (
      <Box overflow="hidden" bg="#fdf7ef">
          
        <div id="videos">
            
            <AgoraVideoPlayer className='vid' videoTrack={tracks[1]} />
            {users.length > 0 &&
            users.map((user) => {
                if (user.videoTrack) {
                return (
                    <AgoraVideoPlayer className='vid' videoTrack={user.videoTrack} key={user.uid} />
                );
                } else return null;
            })}
          </div>
          
    </Box>
  );
};