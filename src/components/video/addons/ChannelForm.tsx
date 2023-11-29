import React from "react";
import { Button } from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons';

export const ChannelForm = (props: {
  setInCall: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setInCall } = props;

  return (
    <form>

      hello world
          <Button
            onClick={(e) => {
                e.preventDefault();
                setInCall(true);
            }}
            colorScheme="teal" ml={3}
            color="white" 
            >
            Call
        </Button>
    </form>
  );
};