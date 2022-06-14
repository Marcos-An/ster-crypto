import type { NextPage } from 'next'
import {
  Image,
  Heading,
  SimpleGrid,
  Grid,
  Box,
  Flex,
  Text,
  Button,
  Show,
  Center
} from '@chakra-ui/react'
import { NftCard } from '@/components/NftCard'
import { useRouter } from 'next/router'

const TextBanner = ({
  children,
  textAlign,
  color = 'white'
}: {
  color?: string
  textAlign?: string
  children: React.ReactNode
}) => {
  return (
    <Heading
      textAlign={textAlign ? 'center' : undefined}
      fontSize={{ base: '26', md: '35', lg: '45' }}
      lineHeight="1.25"
      color={color}
    >
      {children}
    </Heading>
  )
}

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <Box maxW="1200" margin="0 auto">
      <Grid
        templateColumns={['1fr', 'repeat(2, 1fr)']}
        gap={10}
        h="300"
        maxW="1200"
        w="100%"
        mb={['100', null, '170']}
      >
        <Flex color="white" flexDirection="column" justify="center">
          <Show above="md">
            <Box>
              <TextBanner>Discover</TextBanner>
              <TextBanner>Colect and sell</TextBanner>
              <TextBanner>Extraordinary</TextBanner>
              <TextBanner color="orange">NFTs</TextBanner>
              <Box h="1" width="70%" bg="orange" mt="5" />
            </Box>
          </Show>
          <Show below="md">
            <Box>
              <TextBanner textAlign="center">
                Discover Colect and sell Extraordinary
                <Text color="orange">NFTs</Text>
              </TextBanner>
            </Box>
          </Show>
        </Flex>

        <Image src={'/banner.png'} alt="logo" w="100%" height="100%" />
      </Grid>
      <Center>
        <Heading color="purple.500" fontSize="13" mb="2">
          NFT Marketplace
        </Heading>
      </Center>
      <Center>
        <Heading
          mb={['15', '15', '50']}
          fontSize="30"
          color="white"
          display="flex"
          alignItems="center"
        >
          Hot Drops <Image src={'/fire.svg'} alt="fire" boxSize="25" ml="5" />
        </Heading>
      </Center>
      <SimpleGrid
        minChildWidth={['165px', null, '250px']}
        mb="50"
        spacing={['3', null, '7']}
        maxW="1200"
      >
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </SimpleGrid>
      <Center>
        <Button
          colorScheme="blue"
          px="16"
          onClick={() => router.push('/marketplace')}
        >
          View All
        </Button>
      </Center>
    </Box>
  )
}

export default Home
