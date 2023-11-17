import { Center, Divider, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from './pages/Navigation'
import Hero from './containers/Hero'
import Layout from './Layout'
import Features from './containers/Features'
import withScrollAnimation from './components/ScrollAnimation'
import StepsSection from './containers/Stepper'
import Footer from './containers/Footer'
import OurOffer from './containers/OurOffer'
import FAQSection from './containers/FAQ'
import BannerScroll from './containers/BannerScroller'

type Props = {}
const AnimatedFeatures = withScrollAnimation(Features);
const AnimatedFAQ= withScrollAnimation(FAQSection);
const AnimatedOffer = withScrollAnimation(OurOffer)


const Page = () => {
    return (
      <Layout>
      <VStack className='landing-page' flex="center" w="full" justify="center" minH={"100vh"}>
          <Center
                zIndex={10}
                backdropFilter="blur(10px)" 
                minH="100vh"
                w={{ base: "100%", md: "80%" }}
                maxW={{ base: "100%", md: "80%" }}
                borderRadius="lg"
          >
              <VStack zIndex={10} minH="100vh"  w={"full"} maxW={"100%"}>                 
                    <Stack pt={20} h="full" w="100%">
                            
                            <Hero />
                            <BannerScroll />
                            <AnimatedFeatures />
                            <AnimatedOffer />
                            <StepsSection />
                            <AnimatedFAQ />
                           
                    </Stack>
              </VStack>
            </Center>
        </VStack>
    </Layout>
  )
}

export default Page