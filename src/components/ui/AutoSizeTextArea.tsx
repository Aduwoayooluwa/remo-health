import { Textarea } from '@chakra-ui/react';
import React, { useEffect, useRef, TextareaHTMLAttributes } from 'react';

const AutoResizingTextarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = '0px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener('input', handleInput);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener('input', handleInput);
      }
    };
  }, []);

  return <Textarea className='chat-scroll'  pr={"4.5rem"}minH={"50px"} h="50px" maxH={"200px"} ref={textareaRef} {...props}></Textarea>;
};

export default AutoResizingTextarea;
