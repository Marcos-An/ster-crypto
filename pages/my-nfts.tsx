import type { NextPage } from 'next'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { NftCard } from '@/components/NftCard'

const MyNft: NextPage = () => {
  return (
    <Box maxW="1200" margin="0 auto">
      <Heading mb="7" fontSize="30" color="white">
        My NFTs
      </Heading>

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
    </Box>
  )
}

export default MyNft
