// components/FAQSection.tsx
import React from 'react';
import { Box, VStack, Text, useDisclosure, Heading, AccordionIcon, AccordionPanel, AccordionItem, AccordionButton, Button, Image, SimpleGrid, Flex, Divider, Accordion } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

import { faqData } from '../pages/utils,';

const MotionBox = motion(Box);

const FAQSection = () => {
  return (
      <Flex justify="space-between" align="center" direction={{base:"column", md:"row-reverse"}} id="faq-section" py={"10"} px={{ base: 10, md: 0 }}>
        <SimpleGrid w={{base:"full", md:"40%"}} columns={2} gap={8}>
            {
                Array.from([1, 2, 4, 5]).map((item, index) => {
                    return (
                        <Box zIndex={40}
                            borderWidth="0.5px"
                            borderColor="black"
                            borderStyle="dashed"
                            // borderRadius="100px"
                            w={{ base: "150px", md: "200px" }}
                            h={{ base: "150px", md: "200px" }}
                            key={index}
                            p={6}
                        className="hero-clip"
                        >
                        <Image alt="the bg hero" src="https://plus.unsplash.com/premium_photo-1661766708050-a164431ffdf5?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </Box>
                )
            })
            }
        </SimpleGrid>
        <VStack spacing={4} align="stretch">
         <Heading textAlign={"start"} fontWeight={400} my ={{base:10, md:0}} fontSize={{ base: "28px", md: "40px", lg: "50px" }}>
             Frequently Asked Questions
          </Heading>     
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </VStack>
    </Flex>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {


  return (
    <Box as="section">
      <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold">{question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {answer}
            </AccordionPanel>
          </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQSection;
